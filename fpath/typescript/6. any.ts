/* Any

   TypeScript has also a special type, any, that you can use whenever you don't want a particular vale to cause typechecking errors  */

   // here we created an array that can has 2 types objects
   const reviews : (
      {
      name: string;
      stars: number;
      loyaltyUser: LoyaltyUser;
      date: string;   
  } |
  {
      name: string;
      stars: number;
      loyaltyUser: LoyaltyUser;
      date: string;
      description: string;
  }
  )[]= [
      {
          name: 'Sheia',
          stars: 5,
          loyaltyUser: LoyaltyUser.GOLD_USER,
          date: '01-04-2021'
      },
      {
          name: 'Andrzej',
          stars: 3,
          loyaltyUser: LoyaltyUser.BRONZE_USER,
          date: '28-03-2021'
      },
      {
          name: 'Omar',
          stars: 4,
          loyaltyUser: LoyaltyUser.SILVER_USER,
          date: '27-03-2021',
          description: 'Great hosts, location was a bit further than said',
      },
  ]

// or we can do it with Eny type
const reviews : any[] = [
   {
       name: 'Sheia',
       stars: 5,
       loyaltyUser: LoyaltyUser.GOLD_USER,
       date: '01-04-2021'
   },
   {
       name: 'Andrzej',
       stars: 3,
       loyaltyUser: LoyaltyUser.BRONZE_USER,
       date: '28-03-2021'
   },
   {
       name: 'Omar',
       stars: 4,
       loyaltyUser: LoyaltyUser.SILVER_USER,
       date: '27-03-2021',
       description: 'Great hosts, location was a bit further than said',
   },
]

// ***** WE NEED TO AVOID USIN ANY TYPE WHERE EVER POSSIBLE 