const data = {
  reactProjects: [
    {
      id: 1,
      name: 'Movies ( Redux saga & toolkit )',
      image: 'moviesHome.PNG',
      link: 'https://mohamedhamdy94.github.io/Movies-App-toolkit-saga/',
      githup: 'https://github.com/MohamedHamdy94/Movies-App-toolkit-saga.git',

      details: [
        {
          name: 'Home page',
          image: 'moviesHome.PNG',
          description: [
            `navbar with links for different pages .
  View movie list`,
          ],
        },
        {
          name: 'Movie Details',
          image: 'movieEn.PNG',
          description: [
            `User can see the details of the movie by clicking on the movie poster`,
          ],
        },
        {
          name: 'Change Language',
          image: 'movieAr.PNG',
          description: [
            `User can change the language from Arabic to English and vice versa`,
          ],
        },
        {
          name: 'favourite movies',
          image: 'moviesFavourite.PNG',
          description: [
            ` user can go to the favorites page , see the list of his favorite movies and delete the movies from it`,
          ],
        },

        {
          name: 'Search for Movie',
          image: 'moviesSearch.PNG',
          description: [`user can search for the movies he wants`],
        },

        {
          name: 'Change the Page',
          image: 'moviepage.PNG',
          description: [`user can move between pages`],
        },
      ],
    },
    {
      id: 2,

      name: 'To do App',
      image: 'React todo.PNG',
      link: 'https://mohamedhamdy94.github.io/React-To-Do-App/',
      githup: 'https://github.com/MohamedHamdy94/React-To-Do-App.git',

      details: [
        {
          name: 'Home page',
          image: 'React todo.PNG',
          description: [
            `Sharing data between components using props `,
            `
  Red is Parent Component for the To-Do`,
            `Yellow borders are child components one for the input with add button [which will emit the input value to the parent component ]
   Child to parent
   Using output and event emitter is a way to share data is to emit data from the child, which can be listed to by the parent. This approach is ideal when you want to share data changes that occur on things like button clicks, form entires, and other user events.`,
            `
   This approach is ideal when you want to share data changes that occur on things like button clicks, form entires, and other user events.`,
            `
   Other yellow border is for the other child component of the items list]
   Parent to child:`,
            `
   This is probably the most common and straightforward method of sharing data. It works by using the @lnput) decorator to allow data to be passed via the template.`,
            `
   User can add new todo`,
            `
   User can delete todo `,
            `
   User can mark as completed and when mark as completed will be marked with linethrough. `,
          ],
        },
      ],
    },
    {
      id: 3,
      name: 'portfolio',
      image: 'portfolio.PNG',
      link: 'https://mohamedhamdy94.github.io/Mohamed-Hamdy/',
      githup: 'https://github.com/MohamedHamdy94/protfolio.git',
      details: [
        {
          name: 'Home page',
          image: 'portfolio.PNG',
          description: [
            `In my profile, I show everything about me, my experiences, my projects, and how to contact me`,
          ],
        },
        {
          name: 'Home page',
          image: 'projectDetials.PNG',
          description: [
            `The user can view the project details by clicking on it`,
          ],
        },
      ],
    },
    {
      id: 4,
      name: 'Car Rental',
      image: 'Car.PNG',
      link: 'https://mohamedhamdy94.github.io/Cars-App/',
      githup: 'https://github.com/MohamedHamdy94/Cars-App',
      details: [
        {
          name: 'Home page',
          image: 'Cars.png',
          description: [`It's just one page, responsive on all screens`],
        },
      ],
    },
  ],
  angularProjects: [
    {
      id: 5,
      name: 'Shipping App',
      image: 'shoppingHome.PNG',
      link: 'https://mohamedhamdy94.github.io/angular-store/github-hosting-project/',
      githup: 'https://github.com/MohamedHamdy94/angular-store.git',

      details: [
        {
          name: 'Home page',
          image: 'shoppingHome.PNG',
          description: [
            `The home page where the products are displayed to the user
  In order to create an e-commerce site I will go to this site :
  https://fakestoreapi.com`,
            `
  to get list of products I used this API : 
  https://fakestoreapi.com/products`,
          ],
        },
        {
          name: 'Product Details ',
          image: 'ProductDetails.PNG',
          description: [
            `When the user clicks on any product image from the list, he is directed to the product detail page`,
          ],
        },
        {
          name: 'Search for Product',
          image: 'shoppingSearch.PNG',
          description: [`user can search for any product he wants to buy.`],
        },

        {
          name: 'Product Cart',
          image: 'shoppingCart.PNG',
          description: [
            'user can see the products that he has added in the shopping cart and he can increase or decrease the number of any product, and he can delete any product he has added in the shopping cart, or delete all the products in the shopping cart at once.',
          ],
        },
      ],
    },
    {
      id: 6,
      name: 'To do App',
      image: 'Angular ToDo.PNG',
      link: 'https://mohamedhamdy94.github.io/Angular-ToDo-App/',
      githup: 'https://github.com/MohamedHamdy94/Angular-ToDo-App.git',
      details: [
        {
          name: 'Home page',
          image: 'Angular ToDo.PNG',
          description: [
            `Sharing data between components using props `,
            `
        Red is Parent Component for the To-Do`,
            `Yellow borders are child components one for the input with add button [which will emit the input value to the parent component ]
         Child to parent
         Using output and event emitter is a way to share data is to emit data from the child, which can be listed to by the parent. This approach is ideal when you want to share data changes that occur on things like button clicks, form entires, and other user events.`,
            `
         This approach is ideal when you want to share data changes that occur on things like button clicks, form entires, and other user events.`,
            `
         Other yellow border is for the other child component of the items list]
         Parent to child:`,
            `
         This is probably the most common and straightforward method of sharing data. It works by using the @lnput) decorator to allow data to be passed via the template.`,
            `
         User can add new todo`,
            `
         User can delete todo `,
            `
         User can mark as completed and when mark as completed will be marked with linethrough. `,
          ],
        },
      ],
    },
    // {
    //   id: 7,

    //   name: 'Admin Dashboard & Backend',
    //   image: 'admin.PNG',
    //   link: '',

    //   githup: 'https://github.com/MohamedHamdy94/amazon.git',
    //   details: [
    //     {
    //       name: 'Sing In page',
    //       image: 'adminSingIn.PNG',
    //       description: ['Admin must log in first'],
    //     },
    //     {
    //       name: 'Home page',
    //       image: 'admin.PNG',
    //       description: [
    //         `On the home page, the products that come from the backend are displayed`,
    //         `
    //  Admin can add a product, modify an existing product, or delete a product.
    //     `,
    //       ],
    //     },

    //     {
    //       name: 'Orders page',
    //       image: 'adminOrder.PNG',
    //       description: [
    //         `Admin can see the requests made by users and display the details of any request by clicking on the details icon`,
    //       ],
    //     },
    //     {
    //       name: 'Orders Detials page',
    //       image: 'adminOrderDetials.PNG',
    //       description: [
    //         `Here the details of the request are displayed to the admin and checks whether the user has paid or not`,
    //         `Admin decides if he wants to deliver the order to the user, he presses deliverd to let the user see that the order has been delivered`,
    //       ],
    //     },

    //     {
    //       name: 'Users page',
    //       image: 'adminUsers.PNG',
    //       description: [
    //         `This page displays user accounts`,
    //         `admin can delete any of their account`,
    //       ],
    //     },
    //   ],
    // },
  ],
  fullStackProjects: [
    {
      id: 7,
      name: 'Amazon App',
      image: 'amazonScreen.PNG',
      link: 'https://amzon-clone.onrender.com',
      githup: 'https://github.com/MohamedHamdy94/Amazon-clone-using-MERN',

      details: [
        {
          name: 'Home page',
          image: 'amazonScreen.PNG',
          description: [
            `The home page where the products are displayed to the user
  In order to create an e-commerce`,
          ],
        },
        {
          name: 'Product Details ',
          image: 'amazonProduct.PNG',
          description: [
            `When the user clicks on any product image from the list, he is directed to the product detail page.`,
          ],
        },

        {
          name: 'Products Cart',
          image: 'amazonCart.PNG',
          description: [
            'The user must be logged in to the site to go to the Shipping Address page .',
            'user can see the products that he has added in the shopping cart and he can increase or decrease the number of any product, and he can delete any product he has added in the shopping cart, or delete all the products in the shopping cart at once.',
          ],
        },
        {
          name: 'Shipping Address',
          image: 'amazonShipping.PNG',
          description: [
            `The user must be logged in to the site to see the Shipping Address page .`,
            `On the Shipping Address page, the user registers his information.`,
          ],
        },
        {
          name: 'Place Order',
          image: 'amazonPlaceOrder.PNG',
          description: [
            'On the Preview Order page, the user sees the data he entered and the products he added to the cart, and he can modify them and also see the Order Summary.',
            'When you click on the place order button, the order will be registered in the database.',
          ],
        },
        {
          name: 'Login page',
          image: 'amazonLogin.PNG',
          description: [
            'The user must be logged in to complete his purchase order',
          ],
        },
        {
          name: 'Sing Up page',
          image: 'amazonSingUp.PNG',
          description: [
            'The user must be Sign Up to complete his purchase order',
          ],
        },
      ],
    },

    {
      id: 8,

      name: 'Admin Dashboard & Backend',
      image: 'admin.PNG',
      link: 'https://admin-8gy5.onrender.com',
      githup: 'https://github.com/MohamedHamdy94/amazon.git',
      details: [
        {
          name: 'Sing In page',
          image: 'adminSingIn.PNG',
          description: ['Admin must log in first'],
        },
        {
          name: 'Home page',
          image: 'admin.PNG',
          description: [
            `On the home page, the products that come from the backend are displayed`,
            `
     Admin can add a product, modify an existing product, or delete a product.
        `,
          ],
        },

        {
          name: 'Orders page',
          image: 'adminOrder.PNG',
          description: [
            `Admin can see the requests made by users and display the details of any request by clicking on the details icon`,
          ],
        },
        {
          name: 'Orders Detials page',
          image: 'adminOrderDetials.PNG',
          description: [
            `Here the details of the request are displayed to the admin and checks whether the user has paid or not`,
            `Admin decides if he wants to deliver the order to the user, he presses deliverd to let the user see that the order has been delivered`,
          ],
        },

        {
          name: 'Users page',
          image: 'adminUsers.PNG',
          description: [
            `This page displays user accounts`,
            `admin can delete any of their account`,
          ],
        },
      ],
    },
    {
      id: 9,
      name: 'Number Verify App',
      image: 'numHome.PNG',
      link: 'https://mern-number.onrender.com',
      githup: 'https://github.com/MohamedHamdy94/NumbersProject',
      details: [
        {
          name: 'Home page',
          image: 'numHome.PNG',
          description: [
            'this App Allows you to validate and provide information about a phone number in the database.',
          ],
        },
        {
          name: 'login page',
          image: 'numLogin.PNG',
          description: [
'a log-in button on the login page that allows the user to log in with any username or password.'          ],
        },
        {
          name: 'history page',
          image: 'numHistory.PNG',
          description: [
` A history page to display all of the numbers entered into the system and their results, this page should also have 
filters (phone number, date, status, etc.).`,`Higher Order Component (HOC) called 
requireAuth that only shows the history component to logged-in users and redirects non-logged-in users to 
the login page`   ,' Only logged-in users should be able to access the history page'       ],
        },

      ],
    },
  ],
  services: {
    WebDevelopment: [
      ' Develop Web Application with Angular , react,JQuery and native JavaScript',
      ' Full Stack Web Application  ( Backend & Frontend ) ',
      'API Integration',
      'Database integration ',
      'Authentication',
      ' Debug and fix any JavaScript / TypeScript code.',
      ' Write clean and high-quality code ',
      'Fast load times and lag free interaction, my highest priority.',
      'My layouts will work on any device, big or small.',
      "Websites don't have to be static, I love making pages come to life.",
    ],
    UI_UX_Design: [
      'My art & design background informs ideation to design through to implementation, I love making pages come to life.',
      ' I can plan, design, build, launch, and maintain a website myself',
      'Strong preference for easy to use, intuitive UX/UI.',
      'Material UI / Angular Material / Bootstrap / Sass',
      'Fix any HTML/ HTML5,Bootstrap or CSS/ CSs3 styling issue.',
    ],
  },
  experience: {
    frontend: [
      {
        experienceName: ' HTML / HTML5',
        experienceDegree: '',
        experiencePercent: '',
      },
      {
        experienceName: 'CSS / CSS3',
        experienceDegree: '',
        experiencePercent: '',
      },
      {
        experienceName: 'JavaScript',
        experienceDegree: '',
        experiencePercent: '',
      },
      {
        experienceName: 'Typescript',
        experienceDegree: '',
        experiencePercent: '',
      },
      {
        experienceName: 'ES6',
        experienceDegree: '',
        experiencePercent: '',
      },
      {
        experienceName: 'jQuery',
        experienceDegree: '',
        experiencePercent: '',
      },
      {
        experienceName: 'Bootstrap',
        experienceDegree: '',
        experiencePercent: '',
      },
      {
        experienceName: 'Angular',
        experienceDegree: '',
        experiencePercent: '',
      },
      {
        experienceName: ' Angular Materia',
        experienceDegree: '',
        experiencePercent: '',
      },
      {
        experienceName: 'React',
        experienceDegree: '',
        experiencePercent: '',
      },
      {
        experienceName: ' Material UI',
        experienceDegree: '',
        experiencePercent: '',
      },

      {
        experienceName: 'PWA',
        experienceDegree: '',
        experiencePercent: '',
      },
      {
        experienceName: 'RWD',
        experienceDegree: '',
        experiencePercent: '',
      },
      {
        experienceName: 'UI/UX Design',
        experienceDegree: '',
        experiencePercent: '',
      },
      {
        experienceName: 'Cloud computing,',
        experienceDegree: '',
        experiencePercent: '',
      },
      {
        experienceName: ' JS packaging tools',
        experienceDegree: '',
        experiencePercent: '',
      },
      {
        experienceName: ' Git and GitHub',
        experienceDegree: '',
        experiencePercent: '',
      },
      {
        experienceName: ' API Integrations',
        experienceDegree: '',
        experiencePercent: '',
      },
      {
        experienceName:
          'JS Unit testing Techniques, MochaJS / jasmine / Karma,',
        experienceDegree: '',
        experiencePercent: '',
      },
      {
        experienceName: ' Redux thunk/ toolkit/ saga',
        experienceDegree: '',
        experiencePercent: '',
      },
    ],
    backend: [
      {
        experienceName: 'NodeJS',
        experienceDegree: '',
        experiencePercent: '',
      },
      {
        experienceName: 'Express',
        experienceDegree: '',
        experiencePercent: '',
      },
      {
        experienceName: 'MongoDB',
        experienceDegree: '',
        experiencePercent: '',
      },
    ],
  },
};
export default data;
