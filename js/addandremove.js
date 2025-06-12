let product = [
    {
        Course_ID: "BSCS 3330",
        name: "Computational Science Principles",
        Credit: "3",
        Section: "1",
        Type: "Lec",
        Lang: "English",
        Cap: "20",
        Enr: "8",
        Waiting_List: "0",
        Instructor: "Imed Ben Dhaou",
        Room: "M-73-74",
        Day: "SuT",
        Time: "8:00 - 9:50",
        incart: 0
    },
    {
        Course_ID: "BSCS 3380",
        name: "Artificial Intelligence",
        Credit: "3",
        Section: "1",
        Type: "Lec",
        Lang: "English",
        Cap: "20",
        Enr: "11",
        Waiting_List: "0",
        Instructor: "Wadee Alhalabi",
        Room: "M-80-83",
        Day: "SuT",
        Time: "2:00 - 3:50",
        incart: 0
        
    },
    {
        Course_ID: "BSCS 4390",
        name: "Advanced Applications Programming",
        Credit: "3",
        Section: "1",
        Type: "Lec",
        Lang: "English",
        Cap: "20",
        Enr: "7",
        Waiting_List: "0",
        Instructor: "Ghadah Alghamid",
        Room: "M-73-74",
        Day: "SuT",
        Time: "10:00 - 11:50",
        incart: 0
    },
    {
        Course_ID: "PHYS 1302",
        name: "Physics",
        Credit: "3",
        Section: "1",
        Type: "Lec",
        Lang: "English",
        Cap: "20",
        Enr: "15",
        Waiting_List: "0",
        Instructor: "Shamim Khan",
        Room: "M-244",
        Day: "MoW",
        Time: "8:00 - 9:50",
        incart: 0
    },
    {
        Course_ID: "ARAB 1301",
        name: "Treasures of Rhetoric",
        Credit: "3",
        Section: "1",
        Type: "Lec",
        Lang: "Arabic",
        Cap: "30",
        Enr: "25",
        Waiting_List: "0",
        Instructor: "Saeedah Al-Shehab",
        Room: "M-136",
        Day: "MoW",
        Time: "11:00 - 12:50",
        incart: 0 
    },
    {
        Course_ID: "ARAB 1302",
        name: "Geners of Writing",
        Credit: "3",
        Section: "1",
        Type: "Lec",
        Lang: "Arabic",
        Cap: "30",
        Enr: "30",
        Waiting_List: "4",
        Instructor: "Saeedah Al-Shehab",
        Room: "M-245",
        Day: "SuT",
        Time: "8:00 - 9:50",
        incart: 0 
    },
    {
        Course_ID: "ARAB 1303",
        name: "Favorite Stories",
        Credit: "3",
        Section: "1",
        Type: "Lec",
        Lang: "Arabic",
        Cap: "30",
        Enr: "25",
        Waiting_List: "0",
        Instructor: "Saeedah Al-Shehab",
        Room: "M-245",
        Day: "SuT",
        Time: "11:00 - 12:50",
        incart: 0 
    },
    {
        Course_ID: "BSCS 2375",
        name: "Networking and Data Communication",
        Credit: "3",
        Section: "1",
        Type: "Lec",
        Lang: "English",
        Cap: "20",
        Enr: "20",
        Waiting_List: "0",
        Instructor: "Saoucene Mahfoudh",
        Room: "M-144-145-ML",
        Day: "SuT",
        Time: "2:00 - 3:50",
        incart: 0
    },
    {
        Course_ID: "BSCS 4386",
        name: "Natural Language Processing",
        Credit: "3",
        Section: "1",
        Type: "Lec",
        Lang: "English",
        Cap: "20",
        Enr: "20",
        Waiting_List: "0",
        Instructor: "Laila Abuljadayel",
        Room: "M-144-145-ML",
        Day: "MoW",
        Time: "10:00 - 11:50",
        incart: 0
    },

    {
        Course_ID: "HEAL 1301",
        name: "Basic First Aid",
        Credit: "3",
        Section: "1",
        Type: "Lec",
        Lang: "English",
        Cap: "30",
        Enr: "25",
        Waiting_List: "0",
        Instructor: "Jihan Ghulam",
        Room: "M-270-HEAL",
        Day: "SuT",
        Time: "11:30 - 12:50",
        incart: 0
    },

];


let carts = document.querySelectorAll(".add-cart");
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        cartNumbers(product[i]);
        displayCartItems(product[i]);
        displayFilteredCourses(product[i]); // Update the FilteredCourses table
        displayCart(); // Update the display after adding items to the cart
    });
    
}



// Function to initialize cart numbers on page load
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers) || 0; // Ensure it's a number
    let cartSpan = document.querySelector(".cart span");
    if (cartSpan) {
        cartSpan.textContent = productNumbers;
    }
}

// Function to update cart numbers
function cartNumbers(product) {
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector(".cart span").textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".cart span").textContent = 1;
    }

    setItems(product);
}

// Function to manage items in the cart
function setItems(product) {
    let cartItems = JSON.parse(localStorage.getItem("productsInCart")) || {};

    // Create a unique key for each product in the cart
    let productKey = `${product.Course_ID}_${product.Section}_${product.Day}_${product.Time}`;

    // Check if the product is already in the cart
    if (!cartItems[productKey]) {
        // Product is not in the cart, add it with quantity 1
        product.incart = 1;

        // Create an object for the product details
        let productDetails = {
            Course_ID: product.Course_ID,
            name: product.name,
            Credit:product.Credit,
            Section: product.Section,
            Type: product.Type,
            Lang: product.Lang,
            Cap: product.Cap,
            Enr: product.Enr,
            Waiting_List: product.Waiting_List,
            Instructor: product.Instructor,
            Room: product.Room,
            Day: product.Day,
            Time: product.Time,
            incart: 0
        };

        // Add the product to the cart with the unique key
        cartItems[productKey] = productDetails;
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}


// Function to display cart items (for debugging)
function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");

    if (cartItems && productContainer) {
        productContainer.innerHTML = ""; // Clear previous content
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
                <tbody class="product">
                <tr>
                    <td>${item.Course_ID}</td>
                    <td>${item.name}</td>
                    <td>${item.Credit}</td>
                    <td>${item.Section}</td>
                    <td>${item.Type}</td>
                    <td>${item.Lang}</td>
                    <td>${item.Cap}</td>
                    <td>${item.Enr}</td>
                    <td>${item.Waiting_List}</td>
                    <td>${item.Instructor}</td>
                    <td>${item.Room}</td>
                    <td>${item.Day}</td>
                    <td>${item.Time}</td>
                    <td>
                    <button class="remove-button" onclick="removeItem('${item.Course_ID}_${item.Section}_${item.Day}_${item.Time}')">
                            <ion-icon name="close-circle-outline"></ion-icon> Remove
                        </button>
                    </td>
                    </tr>
                </tbody>
            `;
        });
    }
}

function removeItem(key) {
    let cartItems = JSON.parse(localStorage.getItem("productsInCart")) || {};

    if (cartItems[key]) {
        delete cartItems[key];
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));

    // Update cart numbers
    let cartNumbers = localStorage.getItem("cartNumbers");
    cartNumbers = parseInt(cartNumbers);
    if (cartNumbers) {
        localStorage.setItem("cartNumbers", cartNumbers - 1);
        document.querySelector(".cart span").textContent = cartNumbers - 1;
    }

    displayCart(); // Update the display after removing the item from the cart
}

// Function to display cart items in the FilteredCourses table
function displayFilteredCourses(product) {
    let filteredCoursesTableBody = document.querySelector(".FilteredCourses .products");

    if (filteredCoursesTableBody) {
        // Create a new row
        let row = filteredCoursesTableBody.insertRow();

        // Define the order of the cells (columns) you want to display
        let cellsOrder = [
            "Course_ID",
            "name",
            "Credit",
            "Section",
            "Type",
            "Language",
            "Capacity",
            "Enrolement",
            "Waiting List",
            "Instructor",
            "Room",
            "Day",
            "Time",
            "Action"
        ];

        // Loop through the cellsOrder array and insert each property into the corresponding cell
        cellsOrder.forEach((cellName) => {
            let cellValue = product[cellName];

            // Insert the cell into the row
            let cell = row.insertCell();
            cell.textContent = cellValue;
        });

        // Add the delete action cell
        let deleteCell = row.insertCell();
        deleteCell.innerHTML = '<ion-icon name="close-circle-outline" onclick="removeItem(\'' + `${product.Course_ID}_${product.Section}_${product.Day}_${product.Time}` + '\')"></ion-icon>';
    }
}



// Initialize cart numbers and display cart items on page load
onLoadCartNumbers();
displayCart();

