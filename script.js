const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const sideMenu = document.getElementById('side-menu');
const scrollTop = document.getElementById('scroll-top');

const checkoutOverlay = document.getElementById('checkout-overlay');
const checkoutClose = document.getElementById('checkout-close');
const planButtons = document.querySelectorAll('.plan-button');
const planNameSpan = document.getElementById('checkout-plan-name');

const price = document.getElementById('checkout-price');
const promoInput = document.getElementById('promo-code-input');
const promoApplyBtn = document.getElementById('promo-apply-btn');
const promoMessage = document.getElementById('promo-message');

const loginUsername = document.getElementById('login-username')
const loginPassword = document.getElementById('login-password')
const loginMessage = document.getElementById('login-message'); 
const login = document.getElementById('login-button')
let users = {
    "admin": "admin123",
    "deo": "demo123",
    "testuser": "password123"
}

const registerUsername = document.getElementById('register-username')
const registerPassword = document.getElementById('register-password')
const registerPassword2 = document.getElementById('register-password2')
const registerMessage = document.getElementById('register-message');
const register = document.getElementById('create-account')

// Menu
if (menuToggle && menuClose && sideMenu) {
    menuToggle.addEventListener('click', () => {
        sideMenu.classList.add('open');
    });

    menuClose.addEventListener('click', () => {
        sideMenu.classList.remove('open');
    });
}

// Scroll to top
if (scrollTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTop.style.display = 'block';
        } else {
            scrollTop.style.display = 'none';
        }
    });

    scrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Checkout
if (checkoutOverlay && checkoutClose && planButtons.length > 0 && price) {
    let originalPrice = parseFloat(price.dataset.price || '0');
    let promoApplied  = false;

    function formatPrice(value) {
        return `$${value.toFixed(2)} per month`;
    }

    function resetPromo() {
        promoApplied = false;
        if (promoMessage) {
            promoMessage.textContent = '';
            promoMessage.style.color = '';
        }
        if (promoInput) {
            promoInput.value = '';
        }
        price.textContent = formatPrice(originalPrice);
    }

    // Open checkout when any plan button is clicked
    planButtons.forEach(button => {
            button.addEventListener('click', () => {
            const card  = button.closest('.plan-card');
            if (!card) return;

            const name      = card.querySelector('.plan-title')?.textContent || 'Plan';
            const priceText = card.querySelector('.plan-price')?.textContent || '$0.00 per month';

            // Update plan
            if (planNameSpan) {
                planNameSpan.textContent = name;
            }

            const match = priceText.match(/\$([\d.]+)/);
            originalPrice = match ? parseFloat(match[1]) : 0;
            price.dataset.price = originalPrice.toString();
            price.textContent   = formatPrice(originalPrice);
            resetPromo();

            checkoutOverlay.classList.add('open');
        });
    });

    // Close button
    checkoutClose.addEventListener('click', () => {
        checkoutOverlay.classList.remove('open');
    });

    // Promo code
    if (promoInput && promoApplyBtn) {
        promoApplyBtn.addEventListener('click', () => {
            const code = promoInput.value

            if (code === 'NEWMEMBER') {
                if (promoApplied) {
                    if (promoMessage) {
                        promoMessage.textContent = 'Promo code already applied.';
                        promoMessage.style.color = 'red';
                    }
                    return;
                }
                else {
                    promoMessage.textContent = 'Promo code applied.';
                    promoMessage.style.color = 'green';
                }

                const discounted = originalPrice * 0.7;
                price.textContent = formatPrice(discounted);

                promoApplied = true;
            } 
            // Invalid
            else {
                price.textContent = formatPrice(originalPrice);

                if (promoMessage) {
                    promoMessage.textContent = 'Invalid promo code.';
                    promoMessage.style.color = 'red';
                }
            }
        });
    }
}

//login
if (login) {
    login.addEventListener('click', () => {
        const username = loginUsername.value;
        const password = loginPassword.value;

        if (users[username] && users[username] === password) {
            if (loginMessage) {
                loginMessage.textContent = "Login successful. Welcome, " + username + "!";
                loginMessage.style.color = "green";
                //redirect after success
                window.location.href = "index.html";
            } 
        } 
        else {
            if (loginMessage) {
                loginMessage.textContent = "Invalid username or password.";
                loginMessage.style.color = "red";
            } 
        }
    });
}

//register
if (register) {
    register.addEventListener("click", () => {
        const usernameR = registerUsername.value;
        const passwordR = registerPassword.value;
        const password2R = registerPassword2.value;

        // make sure no empty fields
        if (!usernameR || !passwordR || !password2R) {
            registerMessage.textContent = "Fill in all fields.";
            registerMessage.style.color = "red";
            return
        }

        if (passwordR === password2R) {
            registerMessage.textContent = "Account registered.";
            registerMessage.style.color = "green";
            window.location.href = "login.html";
        }
        else {
            registerMessage.textContent = "Passwords do not match.";
            registerMessage.style.color = "red";
        }
    });
}