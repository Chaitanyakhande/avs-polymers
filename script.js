// Product data based on the original website
const products = [
    {
        id: 1,
        title: "Epoxy Insulators and Bushings MAIN",
        category: "General",
        description: "Basic product example.",
        image: "https://avs-polymers.vercel.app/Polymer-images/Polymer-1.jpeg",
        price: "$100",
        stock: "In Stock",
        rating: "4.5"
    },
    {
        id: 2,
        title: "Insulators 22Kv",
        category: "Machinery",
        description: "Machinery item with efficient output.",
        image: "https://avs-polymers.vercel.app/Polymer-images/Polymer-2.jpg",
        price: "$200",
        stock: "In Stock",
        rating: "4.4"
    },
    {
        id: 3,
        title: "ZS2 Bushing",
        category: "Machinery",
        description: "Advanced polymer machinery.",
        image: "https://avs-polymers.vercel.app/Polymer-images/Polymer-3.png",
        price: "$300",
        stock: "In Stock",
        rating: "4.3"
    },
    {
        id: 4,
        title: "33KV Epoxy Insulator",
        category: "Spare Parts",
        description: "Spare parts for extrusion machines.",
        image: "https://avs-polymers.vercel.app/Polymer-images/Polymer-23.jpg",
        price: "$600",
        stock: "In Stock",
        rating: "4.1"
    },
    {
        id: 5,
        title: "Epoxy Bushing 1.1KV",
        category: "Spare Parts",
        description: "1.1KV-250AMP",
        image: "https://avs-polymers.vercel.app/Polymer-images/Polymer-7.png",
        price: "$700",
        stock: "Out of Stock",
        rating: "4.7"
    },
    {
        id: 6,
        title: "ZS2 Bushing",
        category: "Machinery",
        description: "Precision molding tools for industry.",
        image: "https://avs-polymers.vercel.app/Polymer-images/Polymer-8.jpg",
        price: "$800",
        stock: "In Stock",
        rating: "4.8"
    },
    {
        id: 7,
        title: "Epoxy Bushing 1.1KV MAIN",
        category: "General",
        description: "General purpose polymer equipment.",
        image: "https://avs-polymers.vercel.app/Polymer-images/Polymer-9.png",
        price: "$900",
        stock: "In Stock",
        rating: "4.0"
    },
    {
        id: 8,
        title: "Epoxy Insulator Main",
        category: "Machinery",
        description: "Compact machinery for small operations.",
        image: "https://avs-polymers.vercel.app/Polymer-images/Polymer-10.jpg",
        price: "$1000",
        stock: "In Stock",
        rating: "4.3"
    },
    {
        id: 9,
        title: "Bushing Metal Parts",
        category: "Equipment",
        description: "1.1KV-250AMP to 5000AMP(3.6KV-250AMP TO 5000AMP)",
        image: "https://avs-polymers.vercel.app/Polymer-images/Polymer-12.jpg",
        price: "$1200",
        stock: "Out of Stock",
        rating: "4.6"
    },
    {
        id: 10,
        title: "HV Metal Part",
        category: "General",
        description: "Lightweight and portable design.",
        image: "https://avs-polymers.vercel.app/Polymer-images/Polymer-13.png",
        price: "$1300",
        stock: "In Stock",
        rating: "4.2"
    },
    {
        id: 11,
        title: "Palm Connector",
        category: "Equipment",
        description: "Polymer line feeder system.",
        image: "https://avs-polymers.vercel.app/Polymer-images/Polymer-14.jpg",
        price: "$1400",
        stock: "In Stock",
        rating: "4.1"
    },
    {
        id: 12,
        title: "Epoxy Bushing 1.1KV",
        category: "Machinery",
        description: "1.1KV-250AMP to 5000AMP(3.6KV-250AMP TO 5000AMP)",
        image: "https://avs-polymers.vercel.app/Polymer-images/Polymer-15.png",
        price: "$1500",
        stock: "In Stock",
        rating: "4.9"
    },
    {
        id: 13,
        title: "LV Metal Parts",
        category: "Spare Parts",
        description: "Essential replacement components.",
        image: "https://avs-polymers.vercel.app/Polymer-images/Polymer-16.jpg",
        price: "$1600",
        stock: "Out of Stock",
        rating: "4.3"
    },
    {
        id: 14,
        title: "Clamping Ring",
        category: "Spare Parts",
        description: "Compatible with multiple machines.",
        image: "https://avs-polymers.vercel.app/Polymer-images/Polymer-19.jpg",
        price: "$1900",
        stock: "In Stock",
        rating: "4.3"
    },
    {
        id: 15,
        title: "MAIN PAGE",
        category: "Equipment",
        description: "Great for mass-scale operations.",
        image: "https://avs-polymers.vercel.app/Polymer-images/Polymer-20.jpg",
        price: "$2000",
        stock: "In Stock",
        rating: "4.4"
    },
    {
        id: 16,
        title: "3.3KV Epoxy Insulator",
        category: "Machinery",
        description: "Top-tier polymer processing unit.",
        image: "https://avs-polymers.vercel.app/Polymer-images/Polymer-21.jpg",
        price: "$2100",
        stock: "Out of Stock",
        rating: "4.7"
    },
    {
        id: 17,
        title: "Copper Brass Metal Parts",
        category: "Equipment",
        description: "Durable polymer grinding equipment.",
        image: "https://avs-polymers.vercel.app/Polymer-images/Polymer-5.png",
        price: "$500",
        stock: "In Stock",
        rating: "4.2"
    }
];

// Wishlist functionality
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '★';
    }
    
    if (hasHalfStar) {
        starsHTML += '☆';
    }
    
    // Fill remaining stars
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
        starsHTML += '☆';
    }
    
    return starsHTML;
}

// Create product card HTML
function createProductCard(product) {
    const isWishlisted = wishlist.includes(product.id);
    const stockClass = product.stock.toLowerCase().includes('out') ? 'out-of-stock' : 'in-stock';
    
    return `
        <div class="product-card" data-id="${product.id}">
            <img 
                src="${product.image}" 
                alt="${product.title}" 
                class="product-image"
                onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMzAgMTAwTDE3MCA2MEwxNzAgMTQwTDEzMCAxMDBaIiBmaWxsPSIjOUI5QkEwIi8+CjwvZz4KPC9zdmc+'"
            >
            <div class="product-content">
                <h3 class="product-title">${product.title}</h3>
                <span class="product-category">${product.category}</span>
                <p class="product-description">${product.description}</p>
                
                <div class="product-details">
                    <span class="product-price">${product.price}</span>
                    <span class="product-stock ${stockClass}">${product.stock}</span>
                </div>
                
                <div class="product-rating">
                    <span class="rating-stars">${generateStars(parseFloat(product.rating))}</span>
                    <span>${product.rating}</span>
                </div>
                
                <button 
                    class="wishlist-btn ${isWishlisted ? 'wishlisted' : ''}" 
                    onclick="toggleWishlist(${product.id})"
                >
                    ${isWishlisted ? 'Added to Wishlist' : 'Add to Wishlist'}
                </button>
            </div>
        </div>
    `;
}

// Toggle wishlist functionality
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    const isCurrentlyWishlisted = wishlist.includes(productId);
    
    try {
        if (isCurrentlyWishlisted) {
            wishlist = wishlist.filter(id => id !== productId);
            showToast(`${product.title} removed from wishlist`);
        } else {
            wishlist.push(productId);
            showToast(`${product.title} added to wishlist`);
        }
        
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateProductCard(productId);
    } catch (error) {
        showToast('Error updating wishlist. Please try again.', 'error');
    }
}

// Update individual product card
function updateProductCard(productId) {
    const card = document.querySelector(`[data-id="${productId}"]`);
    const button = card.querySelector('.wishlist-btn');
    const isWishlisted = wishlist.includes(productId);
    
    button.textContent = isWishlisted ? 'Added to Wishlist' : 'Add to Wishlist';
    button.classList.toggle('wishlisted', isWishlisted);
}

// Show toast notification
function showToast(message, type = 'success') {
    toastMessage.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Render all products
function renderProducts() {
    const loadingHTML = `
        <div class="loading">
            <div class="spinner"></div>
        </div>
    `;
    
    productsGrid.innerHTML = loadingHTML;
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        const productsHTML = products.map(product => createProductCard(product)).join('');
        productsGrid.innerHTML = productsHTML;
        
        // Add stagger animation
        const cards = document.querySelectorAll('.product-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 500);
}

// Mobile menu toggle
function toggleMenu() {
    const nav = document.querySelector('.nav');
    const hamburger = document.querySelector('.hamburger');
    
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Smooth scroll for anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    
    // Add some interactive effects
    document.addEventListener('mousemove', function(e) {
        const cards = document.querySelectorAll('.product-card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            } else {
                card.style.transform = '';
            }
        });
    });
});

// Handle window resize
window.addEventListener('resize', function() {
    const nav = document.querySelector('.nav');
    if (window.innerWidth > 768) {
        nav.classList.remove('active');
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const nav = document.querySelector('.nav');
        nav.classList.remove('active');
    }
});

// Performance optimization: Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('.product-image');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Call lazy loading after products are rendered
setTimeout(lazyLoadImages, 1000);
