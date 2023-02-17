<script setup>
  import { ref, onMounted, inject } from 'vue'
  
  const fetchJSON = inject('fetchJSON')
  const metadataContent = ref({})
  const metadataImage = ref('')

  onMounted(() => {
    setTimeout( async () => {
      const json = await fetchJSON('ipfs://QmNNHx7rpodRYXhKPtP6czFtvzH3xz6hfrecPnKpoDijFk/20')
      console.log('METADATA', json)
      metadataContent.value = json;
      metadataImage.value = json.image;
    }, 1000)
  })
</script>

<template>
  <div class="card">
    <div>
      <p>The plugin itself verify for you the fastest suitable gateways from the <a href="https://ipfs.github.io/public-gateway-checker/">Public Gateways list</a> provided by <a href="https://protocol.ai/">Protocol Labs</a>.</p>
      <p>Once you have successfully connected to at least 3 of them, the content will show up automatically.</p>
    </div>
  </div>
  <div class="card">
    <div><code>&lt;ipfs-avatar :size="80" :radius="80" src="..."></code></div>
    <div class="flex-container">
      <ipfs-avatar :size="200" :radius="20" src="https://cloudflare-ipfs.com/ipfs/QmZPXo7N2qDMWaCVezr6Mm7FEmxwDitoWkKC3AjELQqS7N"/>
      <!-- <ipfs-avatar :size="200" :radius="10" src="QmZhrMvPZG8Liu36VtEuCuXxAjXWJBusmRk9v8i4y5FDAh"/> -->
      <!-- <ipfs-avatar :size="50" :radius="50" src="https://cloudflare-ipfs.com/ipfs/QmdbFYPhyyoGF7oZ13f3p8dPG66dzrNyK9483wSaoPooyY"/> -->
    </div>
  </div>
  <div class="card">
    <div><code>&lt;ipfs-squared :width="30" :height="30" src="..."></code></div>
    <div class="flex-container">
      <ipfs-squared :width="200" :height="200"  src="https://ipfs.io/ipfs/bafybeibj6pazfaql66giyedx77mzfnnwkhov73vacgiqowpsxwrry4fnxq/20.png"/>
      <!-- <ipfs-squared :width="100" :height="100"  src="https://ipfs.io/ipfs/bafybeibj6pazfaql66giyedx77mzfnnwkhov73vacgiqowpsxwrry4fnxq/1.png"/> -->
      <!-- <ipfs-squared :width="50" :height="50"  src="ipfs://bafybeibj6pazfaql66giyedx77mzfnnwkhov73vacgiqowpsxwrry4fnxq/1.png"/> -->
    </div>
    <p>Here some examples loading images from IPFS using fastest gateways successfully connected to your machine.</p>
    <p>Each time you fill a source for the image, it will try to fetch from the 3 faster gateways connected.</p>
    <p>Once the first responds, it is selected automatically.</p>
  </div>
  <div class="card">
    <div class="flex-container">
      <div>
          <p>
            You can also use the injected function 
            <br><code>fetchJSON('cid or path')</code>
            <br>To load JSON/Metadata from NFTs or documents stored on IPFS.
          </p>
          <div class="json-section">{{JSON.stringify(metadataContent, undefined, 2)}}</div>
      </div>
      <div class="avatar-section">
        <ipfs-avatar :size="200" :radius="200" :src="metadataImage"/>
      </div>
    </div>
  </div>
  <div class="card">
    <p class="aligned-left">Sources for media supported includes:</p>
    <p class="aligned-left"><b>Single CIDv0 or CIDv1</b>: QmPbxe...FmGsvqi</p>
    <p class="aligned-left"><b>CIDv0 or CIDv1 with subpath</b>: bafybe...wpsxwrry4fnxq/1.png</p>
    <p class="aligned-left"><b>IPFS protocol path</b>: ipfs://QmTDxnz...Z9LmFjReuH9/</p>
    <p class="aligned-left"><b>Gateway path (will be replaced by most suitable)</b>: https://ipfs.io/ipfs/bafybe....fnxq/1.png</p>
    <p class="aligned-left"><b>CIDv1 subdomain and Gateway(will also be replaced)</b>: https://bafybei...fuca.ipfs.dweb.link/2.png</p>
    <p class="aligned-left">You can even pass normal URLs withou any reference to IPFS, they will not be changed and will fetch correct path.</p>
  </div>
  <p>
    Creator
  </p>
  <p>
    <a href="https://github.com/filipesoccol" target="_blank" rel="noopener norefferer">
      <img class="avatar" src="https://avatars.githubusercontent.com/u/13040410"/>
    </a>
  </p>
  <p class="read-the-docs">Click on the Vue IPFS logo to check full documentation and roadmap for the product.</p>
</template>

<style scoped>
  .read-the-docs {
    color: #888;
  }
  .min-margin {
    margin:10px;
  }
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
  .aligned-left {
    text-align: left;
  }
  .json-section {
    font-size: 10px;
    font-family: 'courier';
    line-height: 10px;
    max-width: 600px;
  }
</style>
