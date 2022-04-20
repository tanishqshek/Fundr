## **Fundr – API Documentation**

#### **ENDPOINT:**  api/signup

- **Register as a Founder/Investor**

**Method:** 
- POST


**Fields:**
| Key | Description | Type | Required |
| --- | --- | --- | --- |
| Name | Actual Name | string | yes |
| Username | Username | string | yes |
| Password | password | string | yes |
| Mobile | Mobile Number | string | yes |
| UserType | Type of the User | string | yes |


**Sample Request:**

    {

        "name": "DhairyaPatel",

        "username": "dhairya123@gmail.com",

        "password": "pass123",

        "mobile": "99897838268",

        "usertype": "Investor"

    }

**Sample Response:**

  - **Success:**

        {

            "message": "User created successfully.",

            "status": "201"

        }

#### **ENDPOINT –** api/signin

- **Log into the application**

**Method:** 
- POST

**Fields:**
| Key | Description | Type | Required |
| --- | --- | --- | --- |
| Username | Username | string | yes |
| Password | password | string | yes |


**Sample Request:**

    {

        "username": "dhairya123@gmail.com",

        "password": "pass123"

    }

**Sample Response:**

  - **Success:**

        {

            "message": "Signed in successfully.",

            "status": "200",

            "tags": ["Banking"]

        }

#### **ENDPOINT –** api/auth/postpitch

- **As a Founder, add a pitch for your company**

**Method:** 
- POST

**Fields:**
| Key | Description | Type | Required |
| --- | --- | --- | --- |
| company_name | Name of the company | string | yes |
| description | short description | string | yes |
| image_url | url of logo | string | yes |
| tags | comma seperated tags for the company | string | yes |


**Sample Request:**

    {
        "company_name": "Meal Dash",


        "image_url": "https://www.zarla.com/images/zarla-meal-dash-1x1-2400x2400-20210604-t4wm46hd93bvbhgrgxvt.png?crop=1:1,smart&width=250&dpr=2",


        "description": "In 2021, the worldwide online meal delivery business is expected to be worth US$ 106.1 billion. Looking ahead, the publication anticipates that the market will reach US$ 223.7 billion by 2027, with a CAGR of 11.44 percent from 2022 to 2027. Meal Dash can be a hit because it is convenient, quick, and precise, while food service operators enjoy more income, lower labour costs, and fewer mistakes. The popularity of internet meal ordering has grown in recent years. Even before the coronavirus epidemic prompted many restaurants to limit their menu selections to takeout or delivery, an increasing number of consumers were choosing for food delivery, whether pre-made dishes or meal prep kits which proves the business can be highly scalable. There are various options for creating a complete online ordering portal for serving specialty delicacies such as gluten-free, vegan, or paleo desserts. Examine your particular food demands and what would make your life easier and more pleasurable, then give a solution to other customers who share your values and help establish a foodie community.",


        "Tags": "Banking,Automotive"
    }

**Sample Response:**

  - **Success:**

        {

            "message": "Pitch added successfully.",

            "status": "201"

        }

#### **ENDPOINT –** api/auth/getpitch

- **Retrieve Details of various pitches**

**Method:** 
- GET

**Sample Response:**

  - **Success:**

        {

            "message": [

                {

                "Id": "0",

                "ImageUrl": "https://www.google.com/url?sa=i&amp;url=https%3A%2F%2Fwww.brandsoftheworld.com%2Flogo%2Fnidera&amp;psig=AOvVaw1nkVVKEnyrcGGb0LwVHUC7&amp;ust=1644094107900000&amp;source=images&amp;cd=vfe&amp;ved=0CAsQjRxqFwoTCLDCpP315vUCFQAAAAAdAAAAABAD",

                "CompanyName": "Nidera",

                "Description": "Nidera provides financial independence to Generation Z. Nidera allows children to make payments on their own, saving parents the inconvenience of handing them cash or a debit/credit card. Have the flexibility of paying anytime, anyplace without a bank account, with safety and security, while also providing children with financial freedom in a regulated manner. Manage your finances, save money, and earn incentives on every purchase. Nidera offers a limitless number of cards to improve your online and smartphone buying experience. Our goal is to move the smart generation away from cash and toward digital. From ordering your favourite burgers to purchasing gifts for friends, parents, or those special ones (shhhh - we got it for you), the possibilities are limitless"

                "Tags": "Financial Services"

                }

            ],

            "status": "200"

        }

#### **ENDPOINT –** api/auth/swipe

- **As a Investor, swipe right/left/up for various pitches displayed**

**Method:** 
- POST

**Fields:**
| Key | Description | Type | Required |
| --- | --- | --- | --- |
| action | swipe direction | string | yes |
| target | user id of the founder | string | yes |
| pitch_id | id of the pitch | string | yes |


**Sample Request:**

    {

        "action": "right",

        "target": "285da091-c54d-418c-a510-f75402251e2b",

        "pitch_id": "4c9eb48e-1895-4e60-b40a-8d7d435dc746"

    }

**Sample Response:**

  - **Success:**

        {

            "message": "Match Succesful",

            "status": "200"
        
        }

 #### **ENDPOINT –** api/auth/posttags

- **As a Investor, add prefered filter the pitch cards according to tags**

**Method:** 
- POST

**Fields:**
| Key | Description | Type | Required |
| --- | --- | --- | --- |
| Tags | tags | string | yes |

**Sample Request:**

    {

        "Tags":"Banking,Automotive"

    }

**Sample Response:**

  - **Success:**

        {

            "message": "tags added successfully.",

            "status":  "201",

        }

#### **ENDPOINT –** api/auth/getmatches

- **Retrieve matches for a particular user**

**Method:** 
- GET

**Sample Response:**

  - **Success:**

        {
         
            "message": [
         
                {
                    "founder": "Founder1@gmail.com",

                    "company_name": "Milo Insurance",
                    
                    "description": "The worldwide pet insurance market is expected to rise from USD 3.62 billion in 2021 to USD 6.65 billion by 2026. The market is expected to develop at a 13.73 percent CAGR. The pet insurance market is being driven by rising demand and expenditure on pets. Scooby Doos pet insurance is a type of specialised property and casualty insurance plan purchased by pet owners to cover unforeseen expenditures like as surgical treatments, injury accidents, and prescription pet medications. Milo insurance provides pet owners with useful pet plans. The market has experienced promising expansion, bringing with it sophisticated service options to satisfy large new appetites.",
                    
                    "image_url": "https://images-platform.99static.com/HzlkUAaKpZPZ5G18Sg4CqVo9J28=/163x114:1078x1029/500x500/top/smart/99designs-contests-attachments/99/99833/attachment_99833222"
                
                },
            
                {

                    "founder": "Founder2@gmail.com"

                    "company_name": "Nidera",

                    "description": "Nidera provides financial independence to Generation Z. Nidera allows children to make payments on their own, saving parents the inconvenience of handing them cash or a debit/credit card. Have the flexibility of paying anytime, anyplace without a bank account, with safety and security, while also providing children with financial freedom in a regulated manner. Manage your finances, save money, and earn incentives on every purchase. Nidera offers a limitless number of cards to improve your online and smartphone buying experience. Our goal is to move the smart generation away from cash and toward digital. From ordering your favourite burgers to purchasing gifts for friends, parents, or those special ones (shhhh - we got it for you), the possibilities are limitless"

                    image_url": "https://www.google.com/url?sa=i&amp;url=https%3A%2F%2Fwww.brandsoftheworld.com%2Flogo%2Fnidera&amp;psig=AOvVaw1nkVVKEnyrcGGb0LwVHUC7&amp;ust=1644094107900000&amp;source=images&amp;cd=vfe&amp;ved=0CAsQjRxqFwoTCLDCpP315vUCFQAAAAAdAAAAABAD",

                }
            
            ],

            "status" : "200"

        }

#### **ENDPOINT –** api/auth/getarchive

- **Retrieve archive for a particular investor**

**Method:** 
- GET

**Sample Response:**

  - **Success:**

        {
         
            "message": [
         
                {
                    "founder": "Founder1@gmail.com",

                    "company_name": "Milo Insurance",
                    
                    "description": "The worldwide pet insurance market is expected to rise from USD 3.62 billion in 2021 to USD 6.65 billion by 2026. The market is expected to develop at a 13.73 percent CAGR. The pet insurance market is being driven by rising demand and expenditure on pets. Scooby Doos pet insurance is a type of specialised property and casualty insurance plan purchased by pet owners to cover unforeseen expenditures like as surgical treatments, injury accidents, and prescription pet medications. Milo insurance provides pet owners with useful pet plans. The market has experienced promising expansion, bringing with it sophisticated service options to satisfy large new appetites.",
                    
                    "image_url": "https://images-platform.99static.com/HzlkUAaKpZPZ5G18Sg4CqVo9J28=/163x114:1078x1029/500x500/top/smart/99designs-contests-attachments/99/99833/attachment_99833222"
                
                },
            
                {

                    "founder": "Founder2@gmail.com"

                    "company_name": "Nidera",

                    "description": "Nidera provides financial independence to Generation Z. Nidera allows children to make payments on their own, saving parents the inconvenience of handing them cash or a debit/credit card. Have the flexibility of paying anytime, anyplace without a bank account, with safety and security, while also providing children with financial freedom in a regulated manner. Manage your finances, save money, and earn incentives on every purchase. Nidera offers a limitless number of cards to improve your online and smartphone buying experience. Our goal is to move the smart generation away from cash and toward digital. From ordering your favourite burgers to purchasing gifts for friends, parents, or those special ones (shhhh - we got it for you), the possibilities are limitless"

                    image_url": "https://www.google.com/url?sa=i&amp;url=https%3A%2F%2Fwww.brandsoftheworld.com%2Flogo%2Fnidera&amp;psig=AOvVaw1nkVVKEnyrcGGb0LwVHUC7&amp;ust=1644094107900000&amp;source=images&amp;cd=vfe&amp;ved=0CAsQjRxqFwoTCLDCpP315vUCFQAAAAAdAAAAABAD",

                }
            
            ],

            "status" : "200"            

        }