
        // Mobile Menu Toggle
        document.querySelector('.mobile-menu').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    document.querySelector('.nav-links').classList.remove('active');
                }
            });
        });

        // Form Submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your interest in Attendify! We will get back to you soon.');
            this.reset();
        });

        // Download Button Functionality
        document.getElementById('downloadBtn').addEventListener('click', function(e) {
            e.preventDefault();
            // You can set your download link here
            const downloadLink = 'https://github.com/Setur413/AUTOMATED_ATTENDANCE/releases/download/v1.0.0/app-release.apk'; // Replace with your actual download link
            if(downloadLink !== '#') {
                window.location.href = downloadLink;
            } else {
                alert('Download link will be available soon!');
            }
        });

        // Header background on scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if(window.scrollY > 100) {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.backgroundColor = 'white';
                header.style.backdropFilter = 'none';
            }
        });
