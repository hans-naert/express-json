console.log("Hello World!");

(async () => {
    let data = await fetch("data.json");
    let data_json = await data.json();
    console.log(data_json);
    document.querySelector('#json_data').textContent = JSON.stringify(data_json);
    document.querySelector('#append_button').addEventListener('click', async () => {
        const data = { username: "example" };
        let post_fetch= await fetch("/append", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
        let post_response = await post_fetch.json();
        console.log("Success:", post_response);
    });
})();