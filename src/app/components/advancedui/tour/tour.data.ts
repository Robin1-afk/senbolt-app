export const STEPS_BUTTONS = {
    back: {
      classes: "back-button",
      secondary: true,
      text: "Back",
      type: "back"
    },
    cancel: {
      classes: "cancel-button",
      secondary: true,
      text: "Exit",
      type: "cancel"
    },
    next: {
      classes: "next-button",
      text: "Next",
      type: "next"
    },
    finish: {
        classes: "finish-button",
        text: "Finish",
        type: "next"
      }
  };
  
  export const defaultStepOptions = {
    classes:'class-1 class-2',
    scrollTo: true,
    cancelIcon: {
      enabled: true
    }
  };

  export const addSteps:any = [
    {
        id: 'step-1',
        title: "Welcome To Our Tour App",
        text: 'Tailor your travel experience with handpicked destinations, activities, and accommodations suited to your preferences.',
        attachTo: {
            element: '#step-1',
            on:'bottom'
        },
        scrollTo: false,
        buttons: [STEPS_BUTTONS.next],
        
      },
      {
        id: 'step-2',
        title: "Pick a place",
        text: 'Selecting a destination can be exciting! share your preferences or interests.',
        attachTo: {
            element: '#step-2',
            on:'bottom'
        },
        buttons: [
          STEPS_BUTTONS.next
        ],
       
      },
      {
        id: 'step-3',
        title: "Travel Budget",
        text: 'Tips for Saving, Spending, and Making the Most of Every Dollar.',
        attachTo: {
            element: '#step-3',
            on:'bottom'
        },
        buttons: [STEPS_BUTTONS.next],
      },
      {
        id: 'step-4',
        title: "Your Travel Options",
        text: 'Your comprehensive Guide to Smooth Travel Planning',
        attachTo: {
            element: '#step-4',
            on:'bottom'
        },
        buttons: [STEPS_BUTTONS.next],
        classes: "custom-class-name-1 custom-class-name-2",
      },
      {
        id: 'step-5',
        title: "Payment Methods",
        text: 'Various payment options available to make your transactions secure.',
        attachTo: {
            element: '#step-5',
            on:'bottom'
        },
        buttons: [STEPS_BUTTONS.next],
        classes: "custom-class-name-1 custom-class-name-2",
      },
      {
        id: 'step-6',
        title: "Confirm Booking",
        text: 'Verifying every detail and securing reservations for a stress-free trip ahead.',
        attachTo: {
            element: '#step-6',
            on:'bottom'
        },
        buttons: [STEPS_BUTTONS.next],
        classes: "custom-class-name-1 custom-class-name-2",
      },
      {
        id: 'step-7',
        title: "Start Your Journey",
        text: 'New experiences, create unforgettable memories, and ignite your spirit of adventure.',
        attachTo: {
            element: '#step-7',
            on:'bottom'
        },
        buttons: [STEPS_BUTTONS.finish],
        classes: "custom-class-name-1 custom-class-name-2",
      }
  ];
  
  