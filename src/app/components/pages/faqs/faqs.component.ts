import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FaqsComponent {
  panels=[
    { 
      title: '1. Can I customize the admin template?',
      body: "Yes, the admin template is fully customizable. You can modify the layout, color scheme, typography, and more to match your branding or design preferences.",  
      headingId: 'headingOne',
      collapseId: 'collapseOne', 
      collapsed: false
     },
    {
       title: '2. How do I install the admin template?',
       body: "Installing the admin template is straightforward. Simply download the template files and follow the included installation instructions provided in the documentation.",
       headingId: 'headingTwo', 
       collapseId: 'collapseTwo',
       collapsed: true
     },
    {
       title: '3. Is there a demo version available?', 
       body: "Yes, a demo version of the admin template is available for testing purposes. You can access the demo on our website and explore its features before making a purchase.",
       headingId: 'headingThree', 
       collapseId: 'collapseThree' ,
       collapsed: true
      },
      {
        title: '4. How do I integrate the admin template with my existing project?', 
        body: "Integrating the admin template with your existing project is simple. You can either copy the template files into your project directory or use package managers like npm or yarn for easy integration.",
        headingId: 'headingFour', 
        collapseId: 'collapseFour' ,
        collapsed: true
       },
       {
        title: '5. Does the admin template support responsive design?', 
        body: "Yes, the admin template is built with responsive design in mind. It is fully compatible with desktop, tablet, and mobile devices, ensuring a seamless user experience across all screen sizes.",
        headingId: 'headingFive', 
        collapseId: 'collapseFive' ,
        collapsed: true
       }
  ]
panels1:any = [
  {
    title:'1. How do I change the primary color of the theme?',
    body:" Navigate to the 'Theme Settings' page, where you'll find options to choose a primary color and accent color. Select your desired colors and save the changes.",
    headingId: 'headingOne',
    collapseId: 'collapseOne', 
    collapsed: false
  },
  {
    title:'2.  Can I customize the accent color of the theme?',
    body:" Yes, you can customize the accent color of the theme to complement the primary color. Access the theme customization options and find the setting for 'Accent Color.'.",
    headingId: 'headingTwo', 
    collapseId: 'collapseTwo',
    collapsed: true
  },
  {
    title:'3. Is it possible to set a background color for the theme?',
    body:"Absolutely! You can set a background color for the theme by accessing the background settings in the customization panel. Select your desired color or upload a custom background image for a personalized touch.",
    headingId: 'headingThree', 
    collapseId: 'collapseThree' ,
    collapsed: true
  },
  {
    title:'4. How do I adjust the text color for different elements in the theme?',
    body:"To adjust text color, navigate to the typography or text settings in the customization panel. You can set different text colors for headings, body text, links, and other text elements to ensure readability and visual consistency.",
    headingId: 'headingFour', 
    collapseId: 'collapseFour' ,
    collapsed: true
  },
  {
    title:'5. Are there options to customize hover and active states for links and buttons?',
    body:"Yes, you can customize hover and active states for links and buttons to provide visual feedback to users.Look for settings related to link and button states in the customization",
    headingId: 'headingFive', 
    collapseId: 'collapseFive' ,
    collapsed: true
  }
];
panels2:any = [
  {
    title:'1. How do I add new users to the system?',
    body:"Adding new users to the system is simple. As an admin, you can navigate to the user management section and select the option to add a new user.",
    headingId: 'headingOne',
    collapseId: 'collapseOne', 
    collapsed: false
  },
  {
    title:'2. Can I customize user roles and permissions?',
    body:" Yes, you can customize user roles and permissions to control access to different parts of the system. As an admin, you can create custom roles with specific permissions and assign them to users as needed.",
    headingId: 'headingTwo', 
    collapseId: 'collapseTwo',
    collapsed: true
  },
  {
    title:'3.  How do I deactivate or delete a user account?',
    body:"To deactivate or delete a user account, navigate to the user management section and select the option to edit the user account. From there, you can choose to deactivate or delete the account permanently.",
    headingId: 'headingThree', 
    collapseId: 'collapseThree' ,
    collapsed: true
  },
  {
    title:'4. Is there a way to import user data from an external source?',
    body:"Yes, you can import user data from an external source such as a CSV file. There is usually an option available in the user management section to upload a CSV file",
    headingId: 'headingFour', 
    collapseId: 'collapseFour' ,
    collapsed: true
  },
  {
    title:'5. Can users reset their own passwords?',
    body:"Yes, users can typically reset their own passwords using a 'forgot password' feature. They will receive an email with instructions on how to reset their password securely.",
    headingId: 'headingFive', 
    collapseId: 'collapseFive' ,
    collapsed: true
  }
];
panels3:any = [
  {
    title:'1.  How do I set up secure authentication for my application?',
    body:"Setting up secure authentication involves implementing encryption, strong password policies, and secure authentication methods like OAuth or JWT. Our documentation provides step-by-step instructions.",
    headingId: 'headingOne',
    collapseId: 'collapseOne', 
    collapsed: false
  },
  {
    title:'2. What are the best practices for securing user passwords?',
    body:"Best practices for securing user passwords include using strong encryption algorithms (such as bcrypt), enforcing password complexity requirements, and regularly hashing and salting passwords.",
    headingId: 'headingTwo', 
    collapseId: 'collapseTwo',
    collapsed: true
  },
  {
    title:'3. Can I enable two-factor authentication (2FA) for added security?',
    body:"Yes, our admin template supports two-factor authentication (2FA) as an additional layer of security. You can enable 2FA for user accounts to require users to provide a second form of verification, such as a code sent to their mobile device.",
    headingId: 'headingThree', 
    collapseId: 'collapseThree' ,
    collapsed: true
  },
  {
    title:'4.  session management handled securely in the admin template?',
    body:"Yes, session management in the admin template is handled securely to prevent session hijacking and fixation attacks. We use secure cookies, session timeouts, and random session IDs to protect.",
    headingId: 'headingFour', 
    collapseId: 'collapseFour' ,
    collapsed: true
  },
  {
    title:'5. Can I restrict access to certain parts of the application based on user roles and permissions?',
    body:"Yes, our admin template includes role-based access control (RBAC) functionality that allows you to define user roles and permissions and restrict access to certain features or data based on these roles.",
    headingId: 'headingFive', 
    collapseId: 'collapseFive' ,
    collapsed: true
  }
];
panels4:any = [
  {
    title:'1. Can I get help with customizing the admin template to fit my specific requirements?',
    body:"Yes, our support team is available to assist with customizing the admin template to meet your specific needs. Contact us with details of your customization requirements, and we'll provide guidance and assistance as needed.",
    headingId: 'headingOne',
    collapseId: 'collapseOne', 
    collapsed: false
  },
  {
    title:'2. What should I do if I encounter an error while using the admin template?',
    body:"If you encounter an error, first check the documentation for any troubleshooting tips or known issues. If the problem persists, please contact our support team for assistance.",
    headingId: 'headingTwo', 
    collapseId: 'collapseTwo',
    collapsed: true
  },
  {
    title:'3. How can I report a bug or issue with the admin template?',
    body:"To report a bug or issue, please submit a detailed description of the problem along with any relevant screenshots or error messages to our support team. We'll investigate the issue and provide a resolution.",
    headingId: 'headingThree', 
    collapseId: 'collapseThree' ,
    collapsed: true
  },
  {
    title:"4.  I'm having trouble integrating the admin template with my project. What should I do?",
    body:"If you're experiencing difficulties integrating the admin template with your project, refer to the documentation for step-by-step integration instructions. If you still need assistance, don't hesitate to reach out to our support team for help.",
    headingId: 'headingFour', 
    collapseId: 'collapseFour' ,
    collapsed: true
  },
  {
    title:'5. Can I restrict access to certain parts of the application based on user roles and permissions?',
    body:"Yes, our admin template includes role-based access control (RBAC) functionality that allows you to define user roles and permissions and restrict access to certain features or data based on these roles.",
    headingId: 'headingFive', 
    collapseId: 'collapseFive' ,
    collapsed: true
  },
];
  isCollapsed = true;
}
