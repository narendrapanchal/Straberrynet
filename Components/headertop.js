// Optimized header components with reduced duplication and improved structure

// Reusable dropdown column generator
function createDropdownColumn(title, items) {
    const itemsHTML = items.map(item => `<ul>${item}</ul>`).join('');
    return `<div class="column"><h3>${title}</h3>${itemsHTML}</div>`;
}

// Common dropdown items
const commonFaceItems = ['Cleansers', 'Exfoliating & Peeling', 'Toners/ Face Mist', 'Serum & Concentrates', 'Moisturizers & Treatments'];
const commonEyeLipItems = ['Cleansers', 'Exfoliating & Peeling'];
const commonSunCareItems = ['Toners/ Face Mist', 'Serum & Concentrates', 'Moisturizers & Treatments'];

// Optimized dropdown content generator
function createDropdownContent(columns) {
    return `<div class="dropdown-content"><div class="row">${columns.join('')}</div></div>`;
}

function headerupper(){
    return `<div>
    <img src="https://tse2.explicit.bing.net/th?id=OIP.e_RzA_binkR5fghnAUQmRQAAAA&pid=Api&P=0&w=469&h=98" alt="Brand Logo" loading="lazy">
</div>
<div id="headermiddle">
  <div id="searchbar">
    <input type="text" placeholder="SEARCH BRAND/PRODUCT" id="inputdata" autocomplete="off">
    <ion-icon name="search"></ion-icon>
  </div>   
  <div>
    <button type="button">Natural Beauty</button>
    <button type="button">Estee Lauder</button>
    <button type="button">Shiseido</button>
    <button type="button">Double Serum</button>
  </div>    
</div>
<div id="headerend">
    <div>
        <select name="country" id="country">
            <option value="india">India</option>
            <option value="america">America</option>
        </select>
        <button type="button">Order Tracking</button>
    </div>
    <div>
      <button type="button"><ion-icon name="person-circle-outline"></ion-icon><b>Sign in</b></button>
      <button type="button"><ion-icon name="heart-circle-outline"></ion-icon><b>Wishlist</b></button>
      <button type="button"><ion-icon name="bag"></ion-icon><b>Bag</b></button>
    </div>
</div>`;
}

function navbarbelow(){
  // Define dropdown configurations
  const dropdowns = [
    {
      title: '<ion-icon name="menu"></ion-icon>SHOP BY BRAND',
      columns: [
        createDropdownColumn('FACE', commonFaceItems),
        createDropdownColumn('FACE', commonFaceItems)
      ]
    },
    {
      title: 'SKINCARE',
      id: 'skincare',
      onclick: 'skinclick()',
      columns: [
        createDropdownColumn('FACE', commonFaceItems),
        createDropdownColumn('EYE & LIP', commonEyeLipItems.concat(['<h3>SUN & CARE</h3>'].concat(commonSunCareItems))),
        createDropdownColumn('BODY', commonFaceItems)
      ]
    },
    {
      title: 'MAKEUP',
      columns: [
        createDropdownColumn('FACE', commonFaceItems),
        createDropdownColumn('FACE', commonFaceItems),
        createDropdownColumn('FACE', commonFaceItems),
        createDropdownColumn('FACE', commonFaceItems)
      ]
    },
    {
      title: 'HAIRCARE',
      columns: [
        createDropdownColumn('FACE', commonFaceItems),
        createDropdownColumn('FACE', commonFaceItems)
      ]
    },
    {
      title: 'PERFUME',
      columns: [
        createDropdownColumn('FACE', commonFaceItems),
        createDropdownColumn('FACE', commonFaceItems)
      ]
    },
    {
      title: "MEN'S SKINCARE",
      columns: [
        createDropdownColumn('FACE', commonFaceItems),
        createDropdownColumn('FACE', commonFaceItems)
      ]
    },
    {
      title: "MEN'S COLOGNE",
      columns: [
        createDropdownColumn('FACE', commonFaceItems),
        createDropdownColumn('FACE', commonFaceItems)
      ]
    },
    {
      title: 'HOME SCENT',
      columns: [
        `<div class="column">${['face', ...commonFaceItems].map(item => `<ul>${item}</ul>`).join('')}</div>`
      ]
    },
    {
      title: '<ion-icon name="gift-outline"></ion-icon> SPECIAL',
      columns: [
        createDropdownColumn('FACE', commonFaceItems),
        createDropdownColumn('FACE', commonFaceItems)
      ]
    },
    {
      title: '<ion-icon name="star"></ion-icon> NEW',
      columns: [
        createDropdownColumn('FACE', commonFaceItems),
        createDropdownColumn('FACE', commonFaceItems)
      ]
    }
  ];

  // Generate dropdown HTML
  const dropdownsHTML = dropdowns.map(dropdown => `
    <div class="dropdown">
        <div class="dropbtn"${dropdown.id ? ` id="${dropdown.id}"` : ''}${dropdown.onclick ? ` onclick="${dropdown.onclick}"` : ''}>${dropdown.title}</div>
        ${createDropdownContent(dropdown.columns)}
    </div>
  `).join('');

  return `<div class="nav-barCenter">${dropdownsHTML}</div>`;
}

export {headerupper, navbarbelow};