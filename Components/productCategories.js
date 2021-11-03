function skinclick()
  { let skincare=document.getElementById("skincare");
  let headerElement=document.querySelectorAll("#navbaroptions>div> div> div:nth-child(1)");
  headerElement.forEach(element=>{

    element.addEventListener("mouseover", ( )=> {
      // highlight the mouseover target
      element.style.backgroundColor= "white";
      element.style.color= "#623381";
    });
    element.addEventListener("mouseout", () =>{
      // highlight the mouseover target
      element.style.color= "white";
      element.style.backgroundColor= "#623381";
      skincare.style.backgroundColor="white";
   skincare.style.color="#623381";
    });
    
  })
   
   let middleData=document.getElementById("middledata");
   middleData.style.display="grid";
   middleData.style.gridTemplateColumns="20% 70%"
   middleData.style.gridGap="1%"
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
<div>
<img src="https://a.cdnsbn.com/images/English/category_EarlyBirdSale8offNov21_692_1.jpg" alt="">
</div>
<div id="add">

<h3>TOP SKINCARE BRANDS</h3>
      <div id="topskincarebrands">
        <div>
          <h5>BIOTHERM</h5>
          <h5>DECLEOR</h5>
          <h5>LANCOME</h5>
        </div>
        <div>
          <h5>CHRISTIAN DIOR</h5>
          <h5>ELIZABETH ARDEN</h5>
          <h5>L'OCCITANE</h5>
        </div>
        <div>
          <h5>CLARINS</h5>
          <h5>ESTEE LAUDER</h5>
          <h5>SHISEIDO</h5>
        </div>
        <div>
          <h5>CLINIQUE</h5>
          <h5>GUERLAIN</h5>
          <h5>SK II</h5>
        </div>
      </div>
</div>
<h4>9086 results for <span>Skincare</span></h4>
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
  <h4>Skincare</h4>
  <div>
  <div id="product">
   </div>
   </div>
</div>
</div>`
}