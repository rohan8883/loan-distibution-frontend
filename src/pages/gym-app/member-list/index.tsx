import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Page from '@/components/helmet-page';
import { useApi, usePutMutation } from '@/hooks/useCustomQuery';
import { gymApi } from '@/lib';
import { MEMBER_LIST } from './type';
import PaginationComponent from '@/components/pagination';
import SearchBox from '@/components/search-box';
import { Eye, PencilIcon, Trash, Plus } from 'lucide-react';
import LoaderList from '@/components/loader-list';
import {
  Tabs,
  // TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs';
import { Confirm } from '@/components/react-confirm-box';
import toast from 'react-hot-toast';
import OverLayLoader from '@/components/loaders/OverLayLoader';

export default function MemberList() {
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search);
  const memberStatus = searchParam.get('member-status');
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState(memberStatus ?? '');
  const deleteMutation = usePutMutation({});

  const memberListData = useApi<MEMBER_LIST>({
    api: `${gymApi.getAllMembers}?page=${page}&limit=${limit}&q=${search}`,
    key: 'getAllMembersDataWithKey',
    value: [page, limit],
    options: {
      enabled: true
    }
  });

  const handleDelete = async (id: string) => {
    Confirm('Are you sure?', 'Do you want to delete this member?', async () => {
      try {
        const res = await deleteMutation.mutateAsync({
          api: `${gymApi.deleteMember}/${id}`,
          key: 'deleteMember',
          value: id
        });
        if (res.data.success) {
          toast.success(res.data.message);
          memberListData.refetch();
        } else {
          toast.error(res.data.message);
        }
      } catch {
        toast.error('Something went wrong');
      }
    });
  };

  return (
    <Page title="Member List">
      {deleteMutation.isPending && <OverLayLoader />}
      <div className="flex items-center justify-between mt-4">
        <h1 className="text-base font-semibold text-muted-foreground">
          Member List({memberListData.data?.data.totalDocs})
        </h1>

        <Button
          size={'sm'}
          className="bg-primary text-white"
          onClick={() => navigate('/gym-app/add-member')}
        >
          <Plus size={20} />
          <h1 className="ms-1 text-xs">Add Member</h1>
        </Button>
      </div>

      <div className="border-t border-secondary mt-3 mb-2"></div>

      <SearchBox
        search={search}
        setSearch={setSearch}
        refetch={memberListData.refetch}
        isFetching={memberListData.isLoading}
        setPage={setPage}
      />

      {/* tabbar */}
      <div className="mt-4 overflow-x-hidden">
        <Tabs defaultValue={status == '' ? '2' : status} className="w-full">
          <TabsList className="w-full">
            {/* <TabsTrigger
              className={`w-full `}
              value="1"
              onClick={() => {
                setStatus('1');
                setLimit(5);
                setPage(1);
              }}
            >
              Active Member
            </TabsTrigger>
            <TabsTrigger
              className={`w-full`}
              value="0"
              onClick={() => {
                setStatus('0');
                setLimit(5);
                setPage(1);
              }}
            >
              Inactive Member
            </TabsTrigger> */}
            <TabsTrigger
              className={`w-full`}
              value="2"
              onClick={() => {
                setStatus('');
                setLimit(5);
                setPage(1);
              }}
            >
              All Member
            </TabsTrigger>
          </TabsList>
          {/* <TabsContent
            value="1"
            className="text-muted-foreground font-semibold"
          >
            Active Members
          </TabsContent>
          <TabsContent
            value="0"
            className="text-muted-foreground font-semibold"
          >
            Inactive Members
          </TabsContent>
          <TabsContent
            value="2"
            className="text-muted-foreground font-semibold"
          >
            All Members
          </TabsContent> */}
        </Tabs>
      </div>
      {/* line */}
      <div className="border-t border-secondary mt-1 mb-1"></div>
      {/* member list */}
      <LoaderList
        dataLength={memberListData.data?.data?.docs.length!}
        isLoading={memberListData.isFetching}
      >
        {/*  */}
        <div className="grid grid-cols-1 gap-3 mt-2">
          {memberListData.data?.data?.docs.map((data, index) => (
            <Card
              key={index + 1}
              // className=" shadow-none rounded-2xl bg-secondary"
            >
              <div className="p-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center  ">
                    <Avatar className="w-14 h-14 border  dark:border-gray-700">
                      <AvatarImage src={data?.fullImgUrl} alt="@shadcn" />
                      <AvatarFallback className="text-base text-primary">
                        {data?.memberName.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-1">
                      <div className="text-primary font-semibold text-sm flex gap-2">
                        <h1> {data?.memberName}</h1>
                        <h1 className="mt-1.5">
                          {data?.status == 1 ? (
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          ) : (
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                          )}
                        </h1>
                      </div>
                      <div className="text-primary font-bold ">
                        <h1 className="text-muted-foreground text-xs">
                          {data?.mobile}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div>
                    {/* using moment  */}
                    <h1 className="text-primary font-semibold text-sm">
                      {data?.generatedId}
                    </h1>
                    <small className="text-muted-foreground font-bold text-xs">
                      Member ID
                    </small>
                  </div>
                </div>
              </div>

              <div className="px-4 mb-4 gap-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-primary font-semibold text-xs truncate w-44">
                      {data?.email}
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-primary font-semibold text-xs">
                      {data.planMappingId.map((plan) => plan.plan).join(', ')}
                    </h1>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between px-4 mb-4 gap-3">
                <Button
                  size={'sm'}
                  variant="outline"
                  className="text-secondary-foreground border-secondary-foreground w-full h-6 "
                  onClick={() => navigate(`/gym-app/update-member/${data._id}`)}
                >
                  <PencilIcon size={16} />
                  <h1 className="ms-1 text-xs">Edit</h1>
                </Button>
                <Button
                  variant="outline"
                  size={'sm'}
                  className="text-primary w-full h-6 "
                  onClick={() => navigate(`/gym-app/view-member/${data._id}`)}
                >
                  <Eye size={16} />
                  <h1 className="ms-1 text-xs">View</h1>
                </Button>
                <Button
                  size={'sm'}
                  variant="outline"
                  className={
                    data?.status == 1
                      ? ' text-red-700 border-red-700 w-full h-6'
                      : ' text-green-700 border-green-700 w-full h-6'
                  }
                  onClick={() => handleDelete(data._id)}
                >
                  {data?.status == 1 ? <Trash size={16} /> : <Plus size={16} />}
                  <h1 className="ms-1 text-xs">
                    {data?.status == 1 ? 'Delete' : 'Activate'}
                  </h1>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* pagination */}
        <div className="flex justify-end mt-3">
          <PaginationComponent
            page={page}
            perPage={limit}
            totalPage={memberListData.data?.data.totalDocs}
            hasNextPage={memberListData.data?.data?.hasNextPage}
            hasPrevPage={memberListData.data?.data.hasPrevPage}
            setPage={setPage}
            setPerPage={setLimit}
          />
        </div>
      </LoaderList>
    </Page>
  );
}