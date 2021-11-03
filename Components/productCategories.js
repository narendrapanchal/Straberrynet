function skinclick()
  { let skincare=document.getElementById("skincare");
   skincare.style.backgroundColor="white";
   skincare.style.color="#623381";
   let middleData=document.getElementById("middledata");
   middleData.style.display="grid";
   middleData.style.gridTemplateColumns="25% 60%"
  middleData.innerHTML= ` <div>
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
  <div id="filters" ></div>
</div>
<div>
<div id="add"></div>
<hr>
<div id="products">
  <div >
    <select name="" id="">
      <option value="A-Z">SORT BY PRODUCT:A-Z</option>      
      <option value="A-Z">SORT BY POPULARITY</option>
      <option value="A-Z">SORT BY BRAND:A-Z</option>
      <option value="A-Z">SORT BY BIGGEST DISCOUNT</option>
      <option value="A-Z">SORT BY LOWEST PRICE</option>

    </select>
    <div><ion-icon name="grid"></ion-icon></ion-icon>
    <p>Grid</p>
    </div>
    <div><ion-icon name="menu"></ion-icon></ion-icon>
      <p>List</p>
      </div>
      <p>View</p>
  </div>
  <div>
  <div id="product">
   </div>
   </div>
</div>
</div>`
  }