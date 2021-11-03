function headerupper(){
    return `<div>
    <img src="https://tse2.explicit.bing.net/th?id=OIP.e_RzA_binkR5fghnAUQmRQAAAA&pid=Api&P=0&w=469&h=98" alt="">
</div>

<div id="headermiddle">
  <div id="searchbar">
    <input type="text" placeholder="SEARCH BRAND/PRODUCT" id="inputdata" >
    <ion-icon name="search"></ion-icon>
  </div>   
  <div >
    <button>Natural Beauty</button>
    <button>Estee Lauder</button>
    <button>Shiseido</button>
    <button>Double Serum</button>
  </div>    
</div>
<div id="headerend">
    <div>
        <select name="" id="country">
            <option value="india">India</option>
            <option value="america">America</option>
        </select>
        <button> Order Tracking</button>

    </div>
    <div>
      <button><ion-icon name="person-circle-outline"></ion-icon><b>Sign in</b></button>
      <button><ion-icon name="heart-circle-outline"></ion-icon><b>Whishlist</b></button>
      <button><ion-icon name="bag"></ion-icon><b>Bag</b></button>
    </div>
    <div>
  </div>
</div>`;
}
function navbarbelow(){
  return `<div class="nav-barCenter">
  <div class="dropdown">
      <div class="dropbtn"><ion-icon name="menu"></ion-icon>SHOP BY BRAND</div>
      <div class="dropdown-content">
       <div class="row">
      <div class="column">
        <h3>face</h3>
        <ul>Cleansers</ul>
        <ul>Exfoliating & Peeling</ul>
        <ul>Toners/ Face Mist</ul>
        <ul>Serum & Concentrates</ul>
        <ul>Moisturizers & Treatments</ul>
    </div>
        <div class="column">
        <h3>face</h3>
        <ul>Cleansers</ul>
        <ul>Exfoliating & Peeling</ul>
        <ul>Toners/ Face Mist</ul>
        <ul>Serum & Concentrates</ul>
        <ul>Moisturizers & Treatments</ul>
    </div>
      </div>
      </div>
    </div>
    <!-- 2nd -->
    <div class="dropdown">
        <div id="skincare" onclick="skinclick()" class="dropbtn">SKINCARE</div>
        <div class="dropdown-content">
         <div class="row">
        <div class="column">
          <h3>FACE</h3>
          <ul>Cleansers</ul>
          <ul>Exfoliating & Peeling</ul>
          <ul>Toners/ Face Mist</ul>
          <ul>Serum & Concentrates</ul>
          <ul>Moisturizers & Treatments</ul>
      </div>
      <div class="column">
        <h3>EYE & LIP</h3>
        <ul>Cleansers</ul>
        <ul>Exfoliating & Peeling</ul>
        <h3>SUN & CARE</h3>
        <ul>Toners/ Face Mist</ul>
        <ul>Serum & Concentrates</ul>
        <ul>Moisturizers & Treatments</ul>
    </div>
          <div class="column">
          <h3>BODY</h3>
          <ul>Cleansers</ul>
          <ul>Exfoliating & Peeling</ul>
          <ul>Toners/ Face Mist</ul>
          <ul>Serum & Concentrates</ul>
          <ul>Moisturizers & Treatments</ul>
      </div>
        </div>
        </div>
      </div>
    <!-- 3rd -->
      <div class="dropdown">
        <div class="dropbtn">MAKEUP</div>
        <div class="dropdown-content">
         <div class="row">
        <div class="column">
          <h3>face</h3>
          <ul>Cleansers</ul>
          <ul>Exfoliating & Peeling</ul>
          <ul>Toners/ Face Mist</ul>
          <ul>Serum & Concentrates</ul>
          <ul>Moisturizers & Treatments</ul>
      </div>
          <div class="column">
          <h3>face</h3>
          <ul>Cleansers</ul>
          <ul>Exfoliating & Peeling</ul>
          <ul>Toners/ Face Mist</ul>
          <ul>Serum & Concentrates</ul>
          <ul>Moisturizers & Treatments</ul>
      </div>
      <div class="column">
        <h3>face</h3>
        <ul>Cleansers</ul>
        <ul>Exfoliating & Peeling</ul>
        <ul>Toners/ Face Mist</ul>
        <ul>Serum & Concentrates</ul>
        <ul>Moisturizers & Treatments</ul>
    </div>
    <div class="column">
        <h3>face</h3>
        <ul>Cleansers</ul>
        <ul>Exfoliating & Peeling</ul>
        <ul>Toners/ Face Mist</ul>
        <ul>Serum & Concentrates</ul>
        <ul>Moisturizers & Treatments</ul>
    </div>
        </div>
        </div>
      </div>
    <!-- 4th -->
      <div class="dropdown">
        <div class="dropbtn">HAIRCARE</div>
        <div class="dropdown-content">
         <div class="row">
        <div class="column">
          <h3>face</h3>
          <ul>Cleansers</ul>
          <ul>Exfoliating & Peeling</ul>
          <ul>Toners/ Face Mist</ul>
          <ul>Serum & Concentrates</ul>
          <ul>Moisturizers & Treatments</ul>
      </div>
          <div class="column">
          <h3>face</h3>
          <ul>Cleansers</ul>
          <ul>Exfoliating & Peeling</ul>
          <ul>Toners/ Face Mist</ul>
          <ul>Serum & Concentrates</ul>
          <ul>Moisturizers & Treatments</ul>
      </div>
        </div>
        </div>
      </div>
    <!-- 5th -->
      <div class="dropdown">
        <div class="dropbtn">PERFUME</div>
        <div class="dropdown-content">
         <div class="row">
        <div class="column">
          <h3>face</h3>
          <ul>Cleansers</ul>
          <ul>Exfoliating & Peeling</ul>
          <ul>Toners/ Face Mist</ul>
          <ul>Serum & Concentrates</ul>
          <ul>Moisturizers & Treatments</ul>
      </div>
          <div class="column">
          <h3>face</h3>
          <ul>Cleansers</ul>
          <ul>Exfoliating & Peeling</ul>
          <ul>Toners/ Face Mist</ul>
          <ul>Serum & Concentrates</ul>
          <ul>Moisturizers & Treatments</ul>
      </div>
        </div>
        </div>
      </div>
    <!-- 6th -->
      <div class="dropdown">
        <div class="dropbtn">MEN'S SKINCARE</div>
        <div class="dropdown-content">
         <div class="row">
        <div class="column">
          <h3>face</h3>
          <ul>Cleansers</ul>
          <ul>Exfoliating & Peeling</ul>
          <ul>Toners/ Face Mist</ul>
          <ul>Serum & Concentrates</ul>
          <ul>Moisturizers & Treatments</ul>
      </div>
          <div class="column">
          <h3>face</h3>
          <ul>Cleansers</ul>
          <ul>Exfoliating & Peeling</ul>
          <ul>Toners/ Face Mist</ul>
          <ul>Serum & Concentrates</ul>
          <ul>Moisturizers & Treatments</ul>
      </div>
        </div>
        </div>
      </div>
    <!-- 7th -->
      <div class="dropdown">
        <div class="dropbtn">MEN'S COLOGNE</div>
        <div class="dropdown-content">
         <div class="row">
        <div class="column">
          <h3>face</h3>
          <ul>Cleansers</ul>
          <ul>Exfoliating & Peeling</ul>
          <ul>Toners/ Face Mist</ul>
          <ul>Serum & Concentrates</ul>
          <ul>Moisturizers & Treatments</ul>
      </div>
          <div class="column">
          <h3>face</h3>
          <ul>Cleansers</ul>
          <ul>Exfoliating & Peeling</ul>
          <ul>Toners/ Face Mist</ul>
          <ul>Serum & Concentrates</ul>
          <ul>Moisturizers & Treatments</ul>
      </div>
        </div>
        </div>
      </div>
    <!-- 8th -->
      <div class="dropdown">
        <div class="dropbtn">HOME SCENT</div>
        <div class="dropdown-content">
         <div class="row">
        <div class="column">
          <ul>face</ul>
          <ul>Cleansers</ul>
          <ul>Exfoliating & Peeling</ul>
          <ul>Toners/ Face Mist</ul>
          <ul>Serum & Concentrates</ul>
          <ul>Moisturizers & Treatments</ul>
      </div>
        </div>
        </div>
      </div>
    <!-- 9th -->
      <div class="dropdown">
        <div class="dropbtn"><ion-icon name="gift-outline"></ion-icon> SPECIAL</div>
        <div class="dropdown-content">
         <div class="row">
        <div class="column">
          <h3>face</h3>
          <ul>Cleansers</ul>
          <ul>Exfoliating & Peeling</ul>
          <ul>Toners/ Face Mist</ul>
          <ul>Serum & Concentrates</ul>
          <ul>Moisturizers & Treatments</ul>
      </div>
          <div class="column">
          <h3>face</h3>
          <ul>Cleansers</ul>
          <ul>Exfoliating & Peeling</ul>
          <ul>Toners/ Face Mist</ul>
          <ul>Serum & Concentrates</ul>
          <ul>Moisturizers & Treatments</ul>
      </div>
        </div>
        </div>
      </div>
      <!-- 10th -->
      <div class="dropdown">
        <div class="dropbtn"><ion-icon name="star"></ion-icon> NEW</div>
        <div class="dropdown-content">
         <div class="row">
        <div class="column">
          <h3>face</h3>
          <ul>Cleansers</ul>
          <ul>Exfoliating & Peeling</ul>
          <ul>Toners/ Face Mist</ul>
          <ul>Serum & Concentrates</ul>
          <ul>Moisturizers & Treatments</ul>
      </div>
          <div class="column">
          <h3>face</h3>
          <ul>Cleansers</ul>
          <ul>Exfoliating & Peeling</ul>
          <ul>Toners/ Face Mist</ul>
          <ul>Serum & Concentrates</ul>
          <ul>Moisturizers & Treatments</ul>
      </div>
        </div>
        </div>
      </div>
</div>`;
}


export  {headerupper,navbarbelow};