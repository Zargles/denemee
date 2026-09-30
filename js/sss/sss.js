const reveals=document.querySelectorAll(".reveal");

        const revealObserver=new IntersectionObserver((entries)=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    entry.target.classList.add("active");
                    revealObserver.unobserve(entry.target);
                }
            });
        },{
            threshold:.1
        });

        reveals.forEach(element=>{
            revealObserver.observe(element);
        });

        const faqItems=document.querySelectorAll(".faq-item");

        faqItems.forEach(item=>{

            const question=item.querySelector(".faq-question");

            question.addEventListener("click",()=>{

                const isOpen=item.classList.contains("open");

                faqItems.forEach(otherItem=>{
                    otherItem.classList.remove("open");
                });

                if(!isOpen){
                    item.classList.add("open");
                }

            });

        });