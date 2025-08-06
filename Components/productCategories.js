// Optimized product categories with improved DOM manipulation and performance

function skinclick() {
    const skincare = document.getElementById("skincare");
    const headerElements = document.querySelectorAll("#navbaroptions>div>div>div:nth-child(1)");
    
    // Use event delegation for better performance
    headerElements.forEach(element => {
        element.addEventListener("mouseover", () => {
            // Batch style changes
            Object.assign(element.style, {
                backgroundColor: "white",
                color: "#623381"
            });
        });
        
        element.addEventListener("mouseout", () => {
            // Batch style changes
            Object.assign(element.style, {
                color: "white",
                backgroundColor: "#623381"
            });
            Object.assign(skincare.style, {
                backgroundColor: "white",
                color: "#623381"
            });
        });
    });
    
    const middleData = document.getElementById("middledata");
    
    // Batch DOM style changes
    Object.assign(middleData.style, {
        display: "grid",
        gridTemplateColumns: "20% 70%",
        gridGap: "1%"
    });
    
    // Use template literal for better performance and readability
    const contentHTML = `
        <div>
            <div id="availableOptions">
                <h6>Skincare</h6>
                <h2>SKINCARE</h2>
                <h5>Skincare (9076)</h5>
                <p>Body (1479)</p>
                <p>Dental Care (55)</p>
                <p>Eye & Lip (866)</p>
                <p>Face (584)</p>
                <p>Neck & Decollte (52)</p>
                <p>Skincare Sets (301)</p>
                <p>Sun Care (451)</p>
                <p>Tools & Accessories (27)</p>
            </div>
            <hr>
            <div id="filters"></div>
        </div>
        <div>
            <div>
                <img src="https://a.cdnsbn.com/images/English/category_EarlyBirdSale8offNov21_692_1.jpg" 
                     alt="Early Bird Sale" 
                     loading="lazy" 
                     width="692" 
                     height="300">
            </div>
            <div id="add">
                <h3>TOP SKINCARE BRANDS</h3>
                <div id="topskincarebrands">
                    ${createBrandGrid()}
                </div>
            </div>
            <h4>9086 results for <span>Skincare</span></h4>
            <hr>
            <div id="products">
                <div>
                    <select name="sortBy" id="sortBy" aria-label="Sort products">
                        <option value="A-Z">SORT BY PRODUCT:A-Z</option>      
                        <option value="popularity">SORT BY POPULARITY</option>
                        <option value="brand-az">SORT BY BRAND:A-Z</option>
                        <option value="discount">SORT BY BIGGEST DISCOUNT</option>
                        <option value="price-low">SORT BY LOWEST PRICE</option>
                    </select>
                    <div>
                        <ion-icon name="grid" aria-label="Grid view"></ion-icon>
                        <p>Grid</p>
                    </div>
                    <div>
                        <ion-icon name="menu" aria-label="List view"></ion-icon>
                        <p>List</p>
                    </div>
                    <p>View</p>
                </div>
                <h4>Skincare</h4>
                <div>
                    <div id="product"></div>
                </div>
            </div>
        </div>`;
    
    // Single DOM write operation
    middleData.innerHTML = contentHTML;
}

// Helper function to create brand grid with better structure
function createBrandGrid() {
    const brands = [
        ['BIOTHERM', 'DECLEOR', 'LANCOME'],
        ['CHRISTIAN DIOR', 'ELIZABETH ARDEN', "L'OCCITANE"],
        ['CLARINS', 'ESTEE LAUDER', 'SHISEIDO'],
        ['CLINIQUE', 'GUERLAIN', 'SK II']
    ];
    
    return brands.map(brandGroup => 
        `<div>${brandGroup.map(brand => `<h5>${brand}</h5>`).join('')}</div>`
    ).join('');
}