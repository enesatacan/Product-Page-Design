# Daily JavaScript App - Day 26: 🛍️ Dynamic Product Page Design  
🔧 **Day 26** of the **Daily JavaScript Coding Challenge**!  
Part of my Daily JavaScript Coding Challenge, where I create a new JavaScript project every day! The aim? Sharpening my skills 🧠 and staying consistent in coding. 🚀  

## 📋 About the Project  
This project is a **dynamic product page design** that allows users to interact with product details and switch seamlessly between product images. The page also includes customization options to enhance the user experience.  

---

## 🛠️ Technologies Used  
- **HTML5**: For structuring the content of the page.  
- **CSS3**: For styling and visual presentation.  
- **JavaScript**: For handling user interactions and dynamic features.  

---

## ✨ Features  
1. **Product Image Switching**  
   - Users can navigate through different product images using control buttons.  
   - The active button is visually highlighted.  

2. **Product Details**  
   - Displays the product name, price, and discount information.  
   - Includes a product description section.  

3. **Dynamic Options**  
   - **Size Selection**: Users can choose from available size options.  
   - **Color Selection**: Different product color options are provided.  
   - **Quantity Selection**: Users can select the desired product quantity.  

4. **Responsive Design**  
   - The layout adapts seamlessly to different screen sizes, ensuring an optimal user experience.  

---

## 📁 File Structure  
```plaintext
/project
│
├── index.html       # Contains the HTML structure of the project
├── style.css        # Contains the CSS styling of the project
├── app.js           # Contains the JavaScript for dynamic functionality
└── /Images          # Contains the product images
```  

---

## 🔧 JavaScript Functionality  
- **Image Switching**  
   Dynamically updates the product image based on user selection:  
   ```javascript
   productImg.src = "Images/image1.png";
   ```  

- **Button State Management**  
   Ensures only the selected button is marked as active:  
   ```javascript
   for (bt of btn) {
     bt.classList.remove("active");
   }
   ```  

---

## 🚀 How to Use  
1. Download the project and open it on a local server or directly in your browser.  
2. Open the `index.html` file to view the product page.  
3. Use the **control buttons** to switch images and interact with other available options.  

## Screenshot

![image](https://github.com/user-attachments/assets/11805314-422d-4bd6-aeda-e9ffd8a2e536)

