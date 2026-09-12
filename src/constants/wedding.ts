export const WEDDING_CONFIG = {
  commonEvent: {
    date: new Date('2026-11-25T09:00:00'),
    title: 'Common Celebration',
  },
  date: new Date('2026-11-25T09:00:00'),
  bride: {
    name: 'भावना',
    fullName: 'Bhawana Tulera',
    photo: '/assets/images/bride-circle.png',
  },
  groom: {
    name: 'अनुराग',
    fullName: 'Anurag Dosad',
    photo: '/assets/images/groom-circle.png',
  },
  venue: {
    ceremony: {
      name: 'Home',
      address: 'Lweshal, Uttarakhand',
      directionUrl: 'https://maps.app.goo.gl/m84U4vQuLNvVYZsx7',
      time: '09:00 AM',
    },
    reception: {
      name: 'Hotel Novena Bone',
      address: '',
      time: '6:30 PM',
    },
  },
  weddings: [
    {
      date: new Date('2026-11-25T09:00:00'),
      brideNameKey: 'couple.bride-1-name' as const,
      groomNameKey: 'couple.groom-1-name' as const,
      bride: {
        name: 'भावना',
        fullName: 'Bhawana Tulera',
        photo: '/assets/images/bride-circle.png',
      },
      groom: {
        name: 'अनुराग',
        fullName: 'Anurag Dosad',
        photo: '/assets/images/groom-circle.png',
      },
      venue: {
        ceremony: {
          name: 'Home',
          address: 'Lweshal, Uttarakhand',
          directionUrl: 'https://maps.app.goo.gl/m84U4vQuLNvVYZsx7',
          time: '09:00 AM',
        },
        reception: {
          name: 'Hotel Novena Bone',
          address: '',
          time: '6:30 PM',
        },
      },
    },
    {
      date: new Date('2026-11-27T09:00:00'),
      brideDescriptionKey: 'couple.bride-description-2' as const,
      brideNameKey: 'couple.bride-2-name' as const,
      groomNameKey: 'couple.groom-2-name' as const,
      bride: {
        name: 'मानसी',
        fullName: 'Mansi Rana',
        photo: '/assets/images/bride-circle.png',
      },
      groom: {
        name: 'अनुज',
        fullName: 'Anuj Dosad',
        photo: '/assets/images/groom-circle.png',
      },
      venue: {
        ceremony: {
          name: 'Home',
          address: 'Lweshal, Uttarakhand',
          directionUrl: 'https://maps.app.goo.gl/m84U4vQuLNvVYZsx7',
          time: '09:00 AM',
        },
        reception: {
          name: 'Hotel Novena Bone',
          address: '',
          time: '6:30 PM',
        },
      },
    },
  ],
};
