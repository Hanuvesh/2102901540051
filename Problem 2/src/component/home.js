import React from 'react';

const Home = ()=>{

    async function fetching  (){
        const data = await fetch("http://20.244.56.144/test/companies/AMZ/categories/Laptop/prducts?top=10&minPrice=1&maxPrice=10000",{
            method:"GET",
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE5NDc5MDkyLCJpYXQiOjE3MTk0Nzg3OTIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjM3MDZlMjc5LTY3OGMtNDBjOC1hZGRmLTFhOTg1MmIzNjg1MCIsInN1YiI6ImhhbnV2ZXNoMjAyMWNzZHMwMDlAYWJlc2l0LmVkdS5pbiJ9LCJjb21wYW55TmFtZSI6IkFiZXNpdCIsImNsaWVudElEIjoiMzcwNmUyNzktNjc4Yy00MGM4LWFkZGYtMWE5ODUyYjM2ODUwIiwiY2xpZW50U2VjcmV0IjoiV1d4VWlWU0ttUkt1WkJ0TSIsIm93bmVyTmFtZSI6IkhhbnV2ZXNoIFNpbmdoIiwib3duZXJFbWFpbCI6ImhhbnV2ZXNoMjAyMWNzZHMwMDlAYWJlc2l0LmVkdS5pbiIsInJvbGxObyI6IjIxMDI5MDE1NDAwNTEifQ.GAS_16c8KDZ7M7Iu94offZnSYbjEWTKzp7_hLLja1Ys'
                
              }
        })
        const result =  await data.json()
        console.log(result)
      }
      fetching()
     return(
        <div>home</div>
     )
}

export default Home;