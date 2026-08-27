// JavaScript for Fortune Uniforms & Fashion Wears

// Global WhatsApp Phone Number (Can be updated easily)
const FUFW_PHONE = "919999999999"; // Replace with your actual WhatsApp business number

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Dynamic WhatsApp Product Enquiry Handler
    const enquiryButtons = document.querySelectorAll('.whatsapp-inquire-btn');
    enquiryButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const productName = button.getAttribute('data-product-name') || 'Uniforms';
            const category = button.getAttribute('data-category') || 'General';
            const message = `Hello Fortune Uniforms & Fashion Wears! 👋%0A%0AI am interested in getting a bulk quotation for:%0A📦 *Product:* ${encodeURIComponent(productName)}%0A🏷️ *Category:* ${encodeURIComponent(category)}%0A%0APlease share pricing, fabric details, and minimum order quantity (MOQ).`;
            
            const whatsappUrl = `https://wa.me/${FUFW_PHONE}?text=${message}`;
            window.open(whatsappUrl, '_blank');
        });
    });

    // Product Filter Handling (For products.html)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productItems = document.querySelectorAll('.product-item');

    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button state
                filterButtons.forEach(b => {
                    b.classList.remove('active', 'bg-blue-900', 'text-white');
                    b.classList.add('bg-white', 'text-slate-700');
                });
                btn.classList.add('active', 'bg-blue-900', 'text-white');
                btn.classList.remove('bg-white', 'text-slate-700');

                const filterValue = btn.getAttribute('data-filter');

                productItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.classList.remove('hidden');
                        item.classList.add('block');
                    } else {
                        item.classList.add('hidden');
                        item.classList.remove('block');
                    }
                });
            });
        });
    }

    // Contact Form to WhatsApp / Submission
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name')?.value || '';
            const phone = document.getElementById('phone')?.value || '';
            const org = document.getElementById('organization')?.value || 'N/A';
            const uniformType = document.getElementById('uniform-type')?.value || 'General';
            const quantity = document.getElementById('quantity')?.value || '1';
            const notes = document.getElementById('notes')?.value || '';

            const message = `*New Bulk Enquiry from Website* 📋%0A%0A👤 *Name:* ${encodeURIComponent(name)}%0A📞 *Phone:* ${encodeURIComponent(phone)}%0A🏢 *Organization:* ${encodeURIComponent(org)}%0A👔 *Uniform Type:* ${encodeURIComponent(uniformType)}%0A🔢 *Estimated Quantity:* ${encodeURIComponent(quantity)}%0A📝 *Requirement Details:* ${encodeURIComponent(notes)}`;

            const whatsappUrl = `https://wa.me/${FUFW_PHONE}?text=${message}`;
            window.open(whatsappUrl, '_blank');
        });
    }
});
