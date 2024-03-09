const searchGithub = async () => {
  const person = document.getElementById("searchInput").value.trim();
  const responce = await fetch(`https://api.github.com/users/${person}`);
  const sonuc = document.getElementById("SonucYeri");
  const data = await responce.json();
  if (responce.ok) {
    sonuc.style.display = "flex";
    sonuc.innerHTML = `
      <div class="profil">
        <div class="profilImg">
          <img src="${data.avatar_url}"> </img>
        </div>
        <div class="bilgiler">
         <h2 class="name">${data.name || data.login}</h2>
         <p class="username">@${data.login}</p>
         <p>@${data.bio || "hesapta Bio bilgisi bulunmamaktadır."}</p>
        </div>
        <div class="repo">
           <h2 class="repo">Public Repo Sayısı</h2>
           <p class="username">@${data.public_repos}</p>          
        </div>     
        
      </div>
    `;
  }else{
    
    sonuc.style.display = "flex";
    sonuc.innerHTML= `
    <div div class="error"> <img src="./img/404.png"> </div>`;
  }
};

document.getElementById("button").addEventListener("click",searchGithub);