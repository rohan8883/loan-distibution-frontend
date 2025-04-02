import { Routes, Route, Navigate } from 'react-router-dom';
import { StudentLayout, AuthLayout, AdminLayout } from '@/layouts';
import { AuthGuard, GuestGuard } from '@/guard';
import NotFound from '@/pages/errors/NotFound';
import routes from './allRoutes';

export default function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/loan"
        element={<Navigate to="/loan/landing-page" />}
        // element={<Navigate to="/loan/auth/login" />}
        index={true}
      />

      {/*************************************Auth Routes********************************************/}
      <Route
        path="/loan/auth"
        element={
          <GuestGuard>
            <AuthLayout />
          </GuestGuard>
        }
      >
        {routes?.map(
          ({ layout, pages }) =>
            layout === 'auth' &&
            pages?.map(({ path, element, id }) => (
              <Route key={id} path={path} element={element} />
            ))
        )}
      </Route>

      {/*************************************GYM Routes********************************************/}
      <Route
        path="/loan"
        element={
          <AuthGuard>
            <StudentLayout />
          </AuthGuard>
        }
      >
        {routes?.map(
          ({ layout, pages }) =>
            layout === 'tecnician' &&
            pages?.map(({ id, path, element }) => (
              <Route key={id} path={path} element={element} />
            ))
        )}
      </Route>

{/* admin */}
      <Route
        path="/loan"
        element={
          <AuthGuard>
            <AdminLayout />
          </AuthGuard>
        }
      >
        {routes?.map(
          ({ layout, pages }) =>
            layout == 'admin' &&
            pages?.map(({ id, path, element }) => (
              <Route key={id} path={path} element={element} />
            ))
        )}
      </Route>

      {/*************************************Guest Routes********************************************/}
      <Route path="/loan">
        {routes?.map(
          ({ layout, pages }) =>
            layout === 'guest' &&
            pages?.map(({ id, path, element }) => (
              <Route key={id} path={path} element={element} />
            ))
        )}
      </Route>

      {/***************************************404 Routes****************************************************/}
      <Route path="*" element={<NotFound />} />
      <Route path="" element={<Navigate to="/loan" replace />} />
    </Routes>
  );
}
