import { useState } from 'react';
import { 
  FiHome, 
  FiPieChart, 
  FiUsers, 
  FiSettings, 
  FiBell, 
  FiSearch,
  FiMoon,
  FiSun,
  FiMenu,
  FiX
} from 'react-icons/fi';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleMobileSidebar = () => setMobileSidebarOpen(!mobileSidebarOpen);

  return (
    <div className={`flex flex-col h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Mobile sidebar backdrop */}
      {mobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-20 lg:hidden"
          onClick={toggleMobileSidebar}
        />
      )}

      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <button 
              onClick={toggleMobileSidebar}
              className="p-2 mr-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 lg:hidden"
            >
              <FiMenu size={20} />
            </button>
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative">
              <FiBell size={20} />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <div className="flex items-center">
              <img 
                src="https://i.pravatar.cc/150?img=3" 
                alt="User" 
                className="w-8 h-8 rounded-full mr-2"
              />
              {sidebarOpen && <span className="hidden md:block dark:text-white">John Doe</span>}
            </div>
          </div>
        </div>
      </header>

      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className={`
          ${sidebarOpen ? 'w-64' : 'w-20'} 
          ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          fixed lg:relative z-30 h-full transition-all duration-300 ease-in-out
          bg-white dark:bg-gray-800 shadow-lg
        `}>
          <div className="p-4 flex items-center justify-between border-b dark:border-gray-700">
            {sidebarOpen && (
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">Dashboard</h1>
            )}
            <button 
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 hidden lg:block"
            >
              {sidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
            <button 
              onClick={toggleMobileSidebar}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 lg:hidden"
            >
              <FiX size={20} />
            </button>
          </div>

          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center p-3 rounded-lg bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-white">
                  <FiHome size={20} />
                  {sidebarOpen && <span className="ml-3">Dashboard</span>}
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
                  <FiPieChart size={20} />
                  {sidebarOpen && <span className="ml-3">Analytics</span>}
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
                  <FiUsers size={20} />
                  {sidebarOpen && <span className="ml-3">Users</span>}
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
                  <FiSettings size={20} />
                  {sidebarOpen && <span className="ml-3">Settings</span>}
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          {/* Dashboard content */}
          <div className="p-6">
            {/* Stats cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Total Revenue</p>
                    <h3 className="text-2xl font-bold dark:text-white">$45,231</h3>
                    <p className="text-green-500 text-sm">+12% from last month</p>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                    <FiPieChart size={24} />
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Users</p>
                    <h3 className="text-2xl font-bold dark:text-white">12,345</h3>
                    <p className="text-green-500 text-sm">+8% from last month</p>
                  </div>
                  <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300">
                    <FiUsers size={24} />
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Orders</p>
                    <h3 className="text-2xl font-bold dark:text-white">1,234</h3>
                    <p className="text-red-500 text-sm">-2% from last month</p>
                  </div>
                  <div className="p-3 rounded-lg bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Conversion Rate</p>
                    <h3 className="text-2xl font-bold dark:text-white">3.2%</h3>
                    <p className="text-green-500 text-sm">+0.8% from last month</p>
                  </div>
                  <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Charts and tables section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Main chart */}
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6 lg:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold dark:text-white">Revenue Overview</h2>
                  <select className="bg-gray-100 dark:bg-gray-600 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 3 months</option>
                  </select>
                </div>
                <div className="h-80 bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">Chart Placeholder</p>
                </div>
              </div>

              {/* Recent activity */}
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold mb-4 dark:text-white">Recent Activity</h2>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="flex items-start">
                      <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mr-3">
                        <FiBell size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-medium dark:text-white">New order received</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent orders table */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden">
              <div className="p-6 border-b dark:border-gray-600">
                <h2 className="text-lg font-semibold dark:text-white">Recent Orders</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                  <thead className="bg-gray-50 dark:bg-gray-600">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Order</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Customer</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-700 dark:divide-gray-600">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <tr key={item}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white">#00{item}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm dark:text-white">Customer {item}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item % 2 === 0 ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'}`}>
                            {item % 2 === 0 ? 'Completed' : 'Pending'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">2023-06-{10 + item}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm dark:text-white">${(100 + item * 20).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 dark:bg-gray-600 px-6 py-3 flex items-center justify-between border-t dark:border-gray-600">
                <div className="flex-1 flex justify-between sm:hidden">
                  <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600">Previous</a>
                  <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600">Next</a>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">24</span> results
                    </p>
                  </div>
                  <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                      <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">
                        <span className="sr-only">Previous</span>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" aria-current="page" className="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium dark:bg-gray-600 dark:text-white dark:border-gray-500">1</a>
                      <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">2</a>
                      <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">3</a>
                      <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">
                        <span className="sr-only">Next</span>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;