const showFamilies = (array: string[]) => {
  const content = document.getElementById('homeContent');
  if (content) {
    array.forEach((item) => {
      content.innerHTML += `<div class="accordion-item">
            <h2
              class="accordion-header"
              id="heading-${item}">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-${item}"
                aria-expanded="false"
                aria-controls="collapse-${item}">
                <b>${item}</b>
              </button>
            </h2>
            <div
              id="collapse-${item}"
              class="accordion-collapse collapse"
              aria-labelledby="heading-${item}"
              data-bs-parent="#homeContent">
              <div class="accordion-body p-0 homeAccordion" id="${item}">
              </div>
            </div>
          </div>`;
    });
  }
};

export default showFamilies;
