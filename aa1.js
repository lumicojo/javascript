Flatacuties
<html>
<head>
  <title>Flatacuties</title>
  <link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>
  <div id="filterContainer">
    <div id="filterText">
      <span style="float: left; position: absolute;">Filter: </span>
    </div>

    <div id="filterBtnContainer" class="scrolling-wrapper-filter-btns"></div>
  </div>
  <div id="character-bar-container">
    <div id="character-bar"></div>
  </div>
  <div class="characterInfo">
    <div class="logo">
      <h1>Flatacuties</h1>
    </div>
    <br />
    <div id="detailed-info">
      <p id="name">Character's Name</p>
      <div id="image-container">
        <img id="image" src="assets/dummy.gif" alt="Character's Name" />
      </div>
      <h4 id="vote-countH4">
        Total Votes:
        <span id="vote-count" type="number">Character's Votes</span>
      </h4>
      <form id="votes-form">
        <input
          type="number"
          placeholder="Enter Votes (+1 if Empty)"
          id="votes"
          name="votes"
        />
        <input type="submit" value="Add Votes" />
      </form>
    </div>

    <!-- Bonus only! Uncomment the elements below when you are ready to work on the bonus deliverables -->

    <form id="character-form">
      <h4>Add New Cutie</h4>
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label for="image-url">Image URL</label>
        <input
          type="text"
          id="image-url"
          name="image-url"
          placeholder="Placeholder if Empty"
        />
      </div>
      <input type="submit" value="Add Flatacutie" />
    </form>
  </div>
  <script src="src/index.js"></script>
</body>
</html>
