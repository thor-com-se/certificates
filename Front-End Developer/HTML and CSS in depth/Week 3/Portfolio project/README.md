# Portfolio project

This website serves as a final project for the course [HTML and CSS in depth](https://www.coursera.org/learn/html-and-css-in-depth) by Meta.

## Client

The subject chosen for this project is "Retail: Lucky Shrub"

These quotes are provided to describe the client:

> Based in Tuscon, Arizona, Lucky Shrub is a medium-sized garden design firm that specializes in garden design and creation, maintenance and landscaping. The company also runs a small plant nursery that sells indoor and outdoor plants, making them a one-stop shop for clients to "transform any space into an oasis you can be proud of".

> Lucky Shrub was started by a husband and wife team, Jason and Maria, who share a long-time love for plants. Jason is the garden architect. He creates and oversees all designs while managing his team of landscapers. Maria manages all the marketing for the company and oversees the nursery.

### Personas

Based on the description of the client, we can deduce the type of people at the client and its type of customers. These "personas" help us meet the needs and wants of creators and users, to determine the appropriate content before building the website.

#### Client

| Attribute  | Description                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name       | Jason/Maria                                                                                                                                                                                                                                                                                                                                                                                                       |
| Background | Founder of Lucky Shrub, a medium-sized garden design firm based in Tuscon, Arizona. They both share a passion for plants and have extensive experience in garden design, creation, and maintenance. Jason is the garden architect, responsible for creating and overseeing all designs, as well as managing his team of landscapers. Maria handles the marketing aspect of the business and oversees the nursery. |
| Goal       | Successfully showcase Lucky Shrub's services and expertise in garden design and landscaping.                                                                                                                                                                                                                                                                                                                      |
| Goal       | Attract potential clients interested in transforming their spaces into beautiful gardens and landscapes.                                                                                                                                                                                                                                                                                                          |
| Goal       | Increase brand visibility and customer engagement through an appealing website design and effective marketing strategies.                                                                                                                                                                                                                                                                                         |

#### Customer

| Attribute  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Background | The target customers of Lucky Shrub are individuals or businesses in Tuscon, Arizona, and surrounding areas, who are interested in garden design, landscaping services, and purchasing indoor and outdoor plants. They may include homeowners, property developers, businesses with outdoor spaces, and gardening enthusiasts. They value quality, creativity, and expertise when it comes to transforming their spaces into beautiful gardens and landscapes. | Sure, here's the content split into multiple markdown table rows: |
| Goal       | Find a reputable and experienced garden design firm that can bring their vision to life.                                                                                                                                                                                                                                                                                                                                                                       |
| Goal       | Discover inspiration and ideas for their garden projects.                                                                                                                                                                                                                                                                                                                                                                                                      |
| Goal       | Purchase high-quality indoor and outdoor plants from a trusted nursery.                                                                                                                                                                                                                                                                                                                                                                                        |
| Goal       | Access helpful resources and information related to garden design and maintenance.                                                                                                                                                                                                                                                                                                                                                                             |

## Website

The layout of this website must meet the given requirements for the client, and be semantically structured for search engine optimization (SEO) and accessibility.

This quote describes the requirements for the website:

> By completing the lessons in this course, you have acquired the necessary HTML and CSS skills and knowledge to develop a home page with a header, main content and footer. You will have to decide whether you are going to use a grid or flexbox layout for your home page. Your header should contain the client logo and the main content should be a large promotional banner with three columns with text and images below it. Your footer will have two columns: the first column should have a small logo and the second one should have copywriting information. When it comes to styling, you'll have to create the appropriate look and feel for your client's target audience. Remember, you want to create intentional engagement!

### Visual layout

Based on the described requirements, the visual layout will be:

- Header with client logo
- Large promotional banner
  - Three columns with text and images below
- Footers with two columns: small logo and copywriting information

The columns will be constructed using CSS flexbox (`display: flex`)

### Semantic structure

An unordered list `<ul>` is used in the navigation `<nav>`.

The content of the page is added using `<section>` and columns are added as `<article>` because they represent isolated content.

The columns in the footer are represented with `<div>` because semantically the footer is one piece.

Based on the described requirements, the semantic structure will be:

- `<header>`
- `<nav>`
  - `<ul>`
    - `<li>`
- `<main>`
  - `<section>`
    - `<article>`
- `<footer>`
  - `<div>`
  - `<div>`