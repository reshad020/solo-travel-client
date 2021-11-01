import React from 'react';

const Footer = () => {
    return (
        <div class="footer bg-indigo-800">
           <footer class="footer-1  py-8 sm:py-12">
                <div class="container mx-auto px-4">
                    <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
                    <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
                        <h5 class="text-sm font-bold text-gray-200  rounded ">Features</h5>
                        
                    </div>
                    <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-2 sm:mt-0">
                        <h5 class="text-sm font-bold text-gray-200  rounded ">Resources</h5>
                        
                    </div>
                    <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-2 md:mt-0">
                        <h5 class="text-sm font-bold text-gray-200  rounded">About</h5>
                        
                    </div>
                    <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-2 md:mt-0">
                        <h5 class="text-sm font-bold text-gray-200  rounded">Help</h5>
                    
                    </div>
                    <div class="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
                        <h5 class="text-sm font-bold text-gray-200  rounded mb-1 sm:text-center xl:text-left">Stay connected</h5>
                        <div class="flex sm:justify-center xl:justify-start">
                        <a href="" class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600">
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a href="" class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="" class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600">
                            <i class="fab fa-google-plus-g"></i>
                        </a>
                        </div>
                    </div>
                    </div>

                    
                </div>
</footer>
        </div>
    );
};

export default Footer;