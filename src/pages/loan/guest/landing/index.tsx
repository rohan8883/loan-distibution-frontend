import React, { useState } from 'react';

const LoanDistributionPage = () => {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [loanTerm, setLoanTerm] = useState(24);
  const [interestRate, setInterestRate] = useState(7.5);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Sample loan data
  const loanTypes = [
    { id: 1, name: 'Personal Loan', interestRate: '7.5-12%', term: '1-7 years', maxAmount: '$50,000' },
    { id: 2, name: 'Home Loan', interestRate: '3.5-6%', term: '15-30 years', maxAmount: '$500,000' },
    { id: 3, name: 'Auto Loan', interestRate: '4-8%', term: '3-7 years', maxAmount: '$75,000' },
    { id: 4, name: 'Business Loan', interestRate: '8-15%', term: '1-10 years', maxAmount: '$250,000' }
  ];

  // Calculate monthly payment
  const calculateMonthlyPayment = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm;
  
    if (monthlyRate === 0) return principal / numberOfPayments;
  
    const monthlyPayment = principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  
    return Number(monthlyPayment.toFixed(2)); // Convert back to number
  };

  // Calculate total payment and interest
  const totalPayment = (calculateMonthlyPayment() * loanTerm).toFixed(2);
  const totalInterest = (Number(totalPayment) - loanAmount).toFixed(2);
  
  // Sample testimonials
  const testimonials = [
    { id: 1, name: 'Sarah J.', text: 'I was able to get a business loan with great terms in just 48 hours. Highly recommend!', rating: 5 },
    { id: 2, name: 'Michael T.', text: 'The pre-approval process was quick and painless. Got my home loan approved faster than expected.', rating: 4 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <a href="#" className="text-xl font-bold text-blue-700">LoanDistributor</a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-700 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-700 font-medium">Loan Types</a>
              <a href="#" className="text-gray-700 hover:text-blue-700 font-medium">Calculator</a>
              <a href="#" className="text-gray-700 hover:text-blue-700 font-medium">About Us</a>
              <a href="#" className="text-gray-700 hover:text-blue-700 font-medium">Contact</a>
              <a href="/loan/auth/login" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300">Admin Login</a>
            </div>
            
            {/* Mobile Navigation Toggle */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-700 font-medium">Home</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-700 font-medium">Loan Types</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-700 font-medium">Calculator</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-700 font-medium">About Us</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-700 font-medium">Contact</a>
              <button className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300">Apply Now</button>
            </div>
          )}
        </div>
      </nav>

      {/* Content with padding to account for fixed navbar */}
      <div className="pt-16">
        {/* Hero Section */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-6 py-16">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Find the Perfect Loan for Your Needs</h1>
                <p className="text-xl mb-8">Competitive rates, flexible terms, and a simple application process.</p>
                <button className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">Apply Now</button>
              </div>
              <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
                <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">Loan Calculator</h2>
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Loan Amount ($)</label>
                    <input 
                      type="range" 
                      min="1000" 
                      max="50000" 
                      step="1000"
                      value={loanAmount} 
                      onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                      className="w-full" 
                    />
                    <div className="flex justify-between text-gray-600">
                      <span>$1,000</span>
                      <span className="font-semibold">${loanAmount.toLocaleString()}</span>
                      <span>$50,000</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Loan Term (months)</label>
                    <div className="flex space-x-4">
                      {[12, 24, 36, 48, 60].map(term => (
                        <button 
                          key={term}
                          onClick={() => setLoanTerm(term)}
                          className={`py-2 px-3 rounded ${loanTerm === term ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Interest Rate (%)</label>
                    <input 
                      type="range" 
                      min="1" 
                      max="20" 
                      step="0.5"
                      value={interestRate} 
                      onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                      className="w-full" 
                    />
                    <div className="flex justify-between text-gray-600">
                      <span>1%</span>
                      <span className="font-semibold">{interestRate}%</span>
                      <span>20%</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Monthly Payment:</span>
                      <span className="font-bold text-blue-700">${calculateMonthlyPayment()}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Total Payment:</span>
                      <span className="font-medium">${totalPayment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Total Interest:</span>
                      <span className="font-medium">${totalInterest}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Loan Types Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Loan Options to Meet Your Goals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {loanTypes.map(loan => (
                <div key={loan.id} className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">{loan.name}</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Interest Rate:</span>
                      <span className="font-medium">{loan.interestRate}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Term:</span>
                      <span className="font-medium">{loan.term}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Max Amount:</span>
                      <span className="font-medium">{loan.maxAmount}</span>
                    </li>
                  </ul>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300">Learn More</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Simple 3-Step Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold mb-4">Apply Online</h3>
                <p className="text-gray-600">Complete our easy online application in minutes. No paperwork required.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold mb-4">Get Approved</h3>
                <p className="text-gray-600">Receive your loan decision within 24 hours. Fast and transparent.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold mb-4">Receive Funds</h3>
                <p className="text-gray-600">Get your money directly deposited into your account within 1-2 business days.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                  <p className="font-medium text-gray-800">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-700 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Apply now and get a decision as soon as today. Our experts are ready to help you find the right loan solution.</p>
            <button className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">Apply Now</button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-300 py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">LoanDistributor</h3>
                <p className="mb-4">Making financial dreams a reality since 2010.</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">Loan Types</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white">Personal Loans</a></li>
                  <li><a href="#" className="hover:text-white">Home Loans</a></li>
                  <li><a href="#" className="hover:text-white">Auto Loans</a></li>
                  <li><a href="#" className="hover:text-white">Business Loans</a></li>
                  <li><a href="#" className="hover:text-white">Education Loans</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white">Loan Calculator</a></li>
                  <li><a href="#" className="hover:text-white">Credit Score Guide</a></li>
                  <li><a href="#" className="hover:text-white">FAQ</a></li>
                  <li><a href="#" className="hover:text-white">Blog</a></li>
                  <li><a href="#" className="hover:text-white">Help Center</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li>123 Finance Street</li>
                  <li>New York, NY 10001</li>
                  <li>contact@loandistributor.com</li>
                  <li>(123) 456-7890</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
              <p>&copy; 2025 LoanDistributor. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LoanDistributionPage;