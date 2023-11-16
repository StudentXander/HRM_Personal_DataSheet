

// Fetch country data from the REST Countries API
fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(data => {
        const countrySelect = document.getElementById('countrySelect');

        // Populate the dropdown list with country names and abbreviations
        data.forEach(country => {
            const option = document.createElement('option');
            option.value = country.alpha2Code.toLowerCase();
            option.textContent = `${country.name} (${country.alpha2Code})`;
            countrySelect.appendChild(option);
        });
    })
    .catch(error => console.error('Error fetching country data:', error));


  // JavaScript to ensure only one checkbox is checked at a time
  document.querySelectorAll('input[type="checkbox"]').forEach(function (checkbox) {
      checkbox.addEventListener('change', function () {
          document.querySelectorAll('input[type="checkbox"]').forEach(function (otherCheckbox) {
              if (otherCheckbox !== checkbox) {
                  otherCheckbox.checked = false;
              }
          });
      });
  });

function addInputRow_00() {
    var table = document.getElementById("children");
    var row = table.insertRow(-1);

    for (var i = 0; i < 2; i++) {
        var cell = row.insertCell(i);
        var input = document.createElement("input");
        input.type = i === 2 || i === 1 ? "date" : "text"; 
        cell.appendChild(input);
    }
}
