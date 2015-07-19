<hello-world>
  <h2>Hello, {opts.firstName}!</h2>

  <input type="text" name="fName">
  <button onclick={updateName}>Update Name</button>

  <script>
    updateName(){
      opts.firstName = this.fName.value
    }
  </script>
</hello-world>
