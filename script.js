document.addEventListener('DOMContentLoaded', function () {
    // Navbar Toggle Functionality
    const navToggle = document.querySelector('.nav-toggle');
    const navbar = document.querySelector('.navbar');

    navToggle.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });

    // Product Data
    const products = [
        {
            title1: "Exquisite Watches Gold Luxury",
            title2: "Choose Us",
            description: "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
            price: "$499.00",
            imageFileName: "img/Group 4.png",
            background: "linear-gradient(105.54deg, #F4A764 -2.93%, #FFDEC2 72.14%)"
        },
        {
            title1: "Dainty Timepieces",
            title2: "Silver Luxury, Choose Us",
            description: "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
            price: "$469.00",
            imageFileName: "img/Group 5.png",
            background: "linear-gradient(105.54deg, #ADB0B0 -2.93%, #E1E1E1 72.14%)"
        },
        {
            title1: "Elegant Timepieces",
            title2: "Choose Luxury, Choose Us",
            description: "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
            price: "$529.00",
            imageFileName: "img/Group 6.png",
            background: "linear-gradient(105.54deg, #30A357 -2.93%, #75E39A 72.14%)"
        },
        {
            title1: "Refined Timepieces",
            title2: "Choose Luxury, Choose Us",
            description: "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
            price: "$529.00",
            imageFileName: "img/Group 7.png",
            background: "linear-gradient(105.54deg, #F24F4F -2.93%, #FFA895 72.14%)"
        }
    ];

    // Initialize Splide Slider
    const splideList = document.querySelector('.splide__list');

    products.forEach(product => {
        const slide = document.createElement('li');
        slide.classList.add('splide__slide');
        slide.style.background = product.background;

        slide.innerHTML = `
            <div class="text-content">
                <h2>${product.title1}</h2>
                <h3>${product.title2}</h3>
                <p>${product.description}</p>
                <p>${product.price}</p>
            </div>
            <img src="${product.imageFileName}" alt="${product.title1}">
        `;

        splideList.appendChild(slide);
    });

    new Splide('#splide').mount();
});
