// export dataSnippets = [
//   {
//     id_gist: "300d3958bc4ccdd173c0053fd0ba387d",

// }]

fetch("https://api.github.com/gists/300d3958bc4ccdd173c0053fd0ba387d")
  .then((response) => {
    // Success
    if (response.ok) return response.json(); // Returns to then()

    // Error
    return Promise.reject(response);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err); // Error
  });


    // const [snippetsData, setSnippetsData] = useState();
  // useEffect(() => {
  //   const fetchSnippet = async () => {
  //     const response = await axios.get(
  //       "https://api.github.com/gists/300d3958bc4ccdd173c0053fd0ba387d"
  //     );
  //     setSnippetsData(response.data);
  //     console.log(response.data.owner.html_url);
  //   };

  //   fetchSnippet();
  // }, []);
  // console.log(snippetsData)

  // useEffect(() => {
  //   setLoading(true);
  //   const fetchCards = async () => {
  //     const res = await axios.get("https://emoji.ymatuhin.workers.dev/");
  //     setCards(getUnicData(res.data));
  //     setFiltredCards(getUnicData(res.data));
  //   };
  //   fetchCards();
  // }, []);
  // fetch("https://api.github.com/gists/47fa6c2cc2b490bf860898ee74941371")
  //   .then((response) => {
  //     // Success
  //     if (response.ok) return response.json(); // Returns to then()

  //     // Error
  //     return Promise.reject(response);
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((err) => {
  //     console.error(err); // Error
  //   });