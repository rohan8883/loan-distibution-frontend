import React, { useState } from 'react';
import { Link  } from 'react-router-dom';

const LoanDistributionPage = () => {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [loanTerm, setLoanTerm] = useState(24);
  const [interestRate, setInterestRate] = useState(7.5);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Sample loan data
  const loanTypes = [
    { id: 1, name: 'Personal Loan', interestRate: '7.5-12%', term: '1-7 years', maxAmount: '$50,000', icon: '💳', color: 'bg-purple-100' },
    { id: 2, name: 'Home Loan', interestRate: '3.5-6%', term: '15-30 years', maxAmount: '$500,000', icon: '🏠', color: 'bg-teal-100' },
    { id: 3, name: 'Auto Loan', interestRate: '4-8%', term: '3-7 years', maxAmount: '$75,000', icon: '🚗', color: 'bg-blue-100' },
    { id: 4, name: 'Business Loan', interestRate: '8-15%', term: '1-10 years', maxAmount: '$250,000', icon: '💼', color: 'bg-amber-100' }
  ];

  // Calculate monthly payment
  const calculateMonthlyPayment = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm;
  
    if (monthlyRate === 0) return principal / numberOfPayments;
  
    const monthlyPayment = principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  
    return Number(monthlyPayment.toFixed(2));
  };

  // Calculate total payment and interest
  const totalPayment = (calculateMonthlyPayment() * loanTerm).toFixed(2);
  const totalInterest = (Number(totalPayment) - loanAmount).toFixed(2);
  
  // Sample testimonials
  const testimonials = [
    { id: 1, name: 'Sarah J.', text: 'I was able to get a business loan with great terms in just 48 hours. Highly recommend!', rating: 5, role: 'Small Business Owner' },
    { id: 2, name: 'Michael T.', text: 'The pre-approval process was quick and painless. Got my home loan approved faster than expected.', rating: 4, role: 'Home Buyer' },
    { id: 3, name: 'Priya K.', text: 'Excellent customer service and competitive rates. Made my car purchase so much easier!', rating: 5, role: 'Car Buyer' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 backdrop-blur-sm bg-opacity-80">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <a href="#" className="text-2xl font-bold text-indigo-600 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Loan Distribution
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Loan Types</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Calculator</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">About Us</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Contact</a>
              <Link to={'/loan/auth/login'} className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-2 px-6 rounded-full shadow-md transition-all duration-300 hover:shadow-lg">Admin Login</Link>
            </div>
            
            {/* Mobile Navigation Toggle */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="text-gray-700 focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 space-y-4">
              <a href="#" className="block py-2 px-4 text-gray-700 hover:text-indigo-600 font-medium rounded-lg hover:bg-gray-50 transition-colors">Home</a>
              <a href="#" className="block py-2 px-4 text-gray-700 hover:text-indigo-600 font-medium rounded-lg hover:bg-gray-50 transition-colors">Loan Types</a>
              <a href="#" className="block py-2 px-4 text-gray-700 hover:text-indigo-600 font-medium rounded-lg hover:bg-gray-50 transition-colors">Calculator</a>
              <a href="#" className="block py-2 px-4 text-gray-700 hover:text-indigo-600 font-medium rounded-lg hover:bg-gray-50 transition-colors">About Us</a>
              <a href="#" className="block py-2 px-4 text-gray-700 hover:text-indigo-600 font-medium rounded-lg hover:bg-gray-50 transition-colors">Contact</a>
              <button className="mt-2 w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-full shadow-md transition-all duration-300">Apply Now</button>
            </div>
          )}
        </div>
      </nav>

      {/* Content with padding to account for fixed navbar */}
      <div className="pt-16">
        {/* Hero Section */}
        <header className="bg-gradient-to-br from-indigo-900 to-purple-800 text-white">
          <div className="container mx-auto px-6 py-20 md:py-24">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-12 lg:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Smart Financing <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">Tailored for You</span>
                </h1>
                <p className="text-xl mb-8 text-indigo-100 max-w-lg">
                  Competitive rates, flexible terms, and a simple application process designed to help you achieve your financial goals.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="bg-white text-indigo-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
                    Apply Now
                  </button>
                  <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-indigo-700 transition-all duration-300 transform hover:-translate-y-1">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all hover:scale-[1.02] duration-300">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Loan Calculator
                  </h2>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2 font-medium">Loan Amount ($)</label>
                    <input 
                      type="range" 
                      min="1000" 
                      max="50000" 
                      step="1000"
                      value={loanAmount} 
                      onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" 
                    />
                    <div className="flex justify-between text-gray-600 text-sm mt-1">
                      <span>$1,000</span>
                      <span className="font-semibold text-indigo-600">${loanAmount.toLocaleString()}</span>
                      <span>$50,000</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2 font-medium">Loan Term (months)</label>
                    <div className="flex flex-wrap gap-2">
                      {[12, 24, 36, 48, 60].map(term => (
                        <button 
                          key={term}
                          onClick={() => setLoanTerm(term)}
                          className={`py-2 px-4 rounded-full text-sm font-medium transition-all ${loanTerm === term ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                          {term} mo
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2 font-medium">Interest Rate (%)</label>
                    <input 
                      type="range" 
                      min="1" 
                      max="20" 
                      step="0.5"
                      value={interestRate} 
                      onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" 
                    />
                    <div className="flex justify-between text-gray-600 text-sm mt-1">
                      <span>1%</span>
                      <span className="font-semibold text-indigo-600">{interestRate}%</span>
                      <span>20%</span>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100">
                    <div className="flex justify-between mb-3">
                      <span className="text-gray-700">Monthly Payment:</span>
                      <span className="font-bold text-indigo-700 text-lg">${calculateMonthlyPayment()}</span>
                    </div>
                    <div className="flex justify-between mb-3">
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
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-4">Loan Options</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Financial Solutions for Every Need</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose from our flexible loan options designed to help you achieve your personal and professional goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {loanTypes.map(loan => (
                <div key={loan.id} className={`${loan.color} rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}>
                  <div className="p-6">
                    <div className="text-4xl mb-4">{loan.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{loan.name}</h3>
                    <ul className="space-y-2 mb-6">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Rate:</span>
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
                    <button className="w-full bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white font-medium py-2 px-4 rounded-full transition-colors duration-300 border border-indigo-100">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-4">Our Process</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Simple, Fast & Transparent</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get the funds you need in just a few easy steps with our streamlined application process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting line for steps */}
              <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-1 bg-indigo-100 z-0"></div>
              
              {[
                {number: '1', title: 'Apply Online', description: 'Complete our easy online application in minutes with no paperwork required.', icon: '📝'},
                {number: '2', title: 'Get Approved', description: 'Receive your loan decision within 24 hours with fast and transparent processing.', icon: '✅'},
                {number: '3', title: 'Receive Funds', description: 'Get your money directly deposited into your account within 1-2 business days.', icon: '💰'}
              ].map((step, index) => (
                <div key={index} className="relative z-10">
                  <div className="bg-white p-8 rounded-xl shadow-md text-center h-full transition-all duration-300 hover:shadow-lg">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-md">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                {value: '15K+', label: 'Happy Customers'},
                {value: '$500M+', label: 'Loans Funded'},
                {value: '98%', label: 'Approval Rate'},
                {value: '24h', label: 'Average Approval Time'}
              ].map((stat, index) => (
                <div key={index} className="p-4">
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-indigo-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-4">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it - hear from people who've used our services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="bg-indigo-100 text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take the Next Step?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Apply now and get a decision as soon as today. Our experts are ready to help you find the perfect financial solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
                Apply Now
              </button>
              <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:-translate-y-1">
                Contact Us
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-4">FAQs</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our loan process.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {[
                {question: "What documents do I need to apply?", answer: "Typically, you'll need proof of identity, income verification, and bank statements. The exact requirements may vary based on the loan type."},
                {question: "How long does the approval process take?", answer: "Most applications receive a decision within 24 hours, with funds typically available within 1-2 business days after approval."},
                {question: "What credit score do I need?", answer: "We consider applicants with a range of credit scores. While higher scores get better rates, we have options for various credit situations."},
                {question: "Can I pay off my loan early?", answer: "Yes, all our loans allow for early repayment without any prepayment penalties."}
              ].map((faq, index) => (
                <div key={index} className="mb-6 border-b border-gray-200 pb-6">
                  <button className="flex justify-between items-center w-full text-left font-semibold text-gray-800 text-lg focus:outline-none">
                    <span>{faq.question}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className="mt-2 text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <h3 className="text-white text-xl font-bold mb-6 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Finova
                </h3>
                <p className="mb-6">Making financial dreams a reality with transparent and personalized loan solutions.</p>
                <div className="flex space-x-4">
                  {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social, index) => (
                    <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors">
                      <span className="sr-only">{social}</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        {social === 'Facebook' && <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />}
                        {social === 'Twitter' && <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />}
                        {social === 'LinkedIn' && <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />}
                        {social === 'Instagram' && <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-white text-lg font-semibold mb-6">Loan Types</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="hover:text-white transition-colors">Personal Loans</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Home Loans</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Auto Loans</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Business Loans</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Student Loans</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white text-lg font-semibold mb-6">Resources</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="hover:text-white transition-colors">Loan Calculator</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Financial Guides</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white text-lg font-semibold mb-6">Contact Us</h3>
                <address className="not-italic space-y-3">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>123 Finance Street<br />New York, NY 10001</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:contact@finova.com">contact@finova.com</a>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+11234567890">(123) 456-7890</a>
                  </div>
                </address>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
              <p>&copy; {new Date().getFullYear()} Finova. All rights reserved. | <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-white transition-colors">Terms of Service</a></p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LoanDistributionPage;