
// we can asign array type like this - string array
   let stayedAt: string[];

   stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']

// but if in the array we will put a number, we will get an error, to fix it
   let stayedAtt: (string | number)[];

   stayedAtt: ['florida-home', 'oman-flat', 'tokyo-bungalow', 23]

// but waht if we have an arrray of objects - we will use {}[] syntex
const properties : {
   image: string;
   title: string;
   price: number;
   location: {
       firstLine: string;
       city: string;
       code: number;
       country: string;
   };
   contact: string;
   isAvailable: boolean;
}[] = [
   {
       image: '',
       title: 'Colombian Shack',
       price: 45,
       location: {
           firstLine: 'shack 37',
           city: 'Bogota',
           code: 45632,
           country: 'Colombia'
       },
       contact: 'marywinkle@gmail.com',
       isAvailable: true  
   },
   {
       image: '',
       title: 'Polish Cottage',
       price: 34,
       location: {
           firstLine: 'no 23',
           city: 'Gdansk',
           code: 343903,
           country: 'Poland'
       },
       contact: 'garydavis@hotmail.com',
       isAvailable: false 
   },
   {
       image: '',
       title: 'London Flat',
       price: 23,
       location: {
           firstLine: 'flat 15',
           city: 'London',
           code: 35433,
           country: 'United Kingdom',
       },
       contact: 'andyluger@aol.com',
       isAvailable: true
   }
]