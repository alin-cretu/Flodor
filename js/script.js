window.onload = function () {
  let selectedOption = localStorage.getItem('language')
  if (selectedOption === null) {
    selectedOption = 'ro';
    localStorage.setItem('language', selectedOption)
  }
  const selectElement = document.getElementById('languageSelect');
  const optionElement = selectElement.querySelector(`option[value="${selectedOption}"]`);
  if (optionElement) {
    optionElement.selected = true;
  }
}

// Function to update content based on selected language
function updateContent(langData) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.textContent = langData[key];
  });
}

function handleLanguageSelect(event) {
  const selectedValue = event.target.value;
  localStorage.setItem('language', selectedValue)
  window.location.reload();

  console.log('limba selectata', selectedValue)
}



// Function to set the language preference
function setLanguagePreference(lang) {
  localStorage.setItem('language', lang);
  location.reload();
}



// Function to fetch language data
async function fetchLanguageData(lang) {
  const response = await fetch(`languages/${lang}.json`);
  return response.json();
}

// Call updateContent() on page load
window.addEventListener('DOMContentLoaded', async () => {
  const userPreferredLanguage = localStorage.getItem('language') || 'ro';
  const langData = await fetchLanguageData(userPreferredLanguage);
  updateContent(langData);

});

// //Function to change language
// async function changeLanguage(lang) {
//   await setLanguagePreference(lang);

//   const langData = await fetchLanguageData(lang);
//   updateContent(langData);

//   // Call updateContent() on page load
//   window.addEventListener('DOMContentLoaded', async () => {
//     const userPreferredLanguage = localStorage.getItem('language') || 'en';
//     const langData = await fetchLanguageData(userPreferredLanguage);
//     updateContent(langData);

//   });

//   function changeLanguage(lang) {
//     // Here you can perform actions to change the language, such as updating text content, etc.
//     console.log("Switched to " + lang);
//     // Update the text of the dropdown button to reflect the selected language
//     document.getElementById("navbarDropdown").textContent = "Language: " + lang.toUpperCase(); // You can modify this as needed
//   }

// }