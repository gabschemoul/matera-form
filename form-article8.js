function prefillForm() {
  const search = new URLSearchParams(window.location.search)
  if (search.has("form_data")) {
    const str = search.get("form_data").replace(/\s/g, "+");
    const data = JSON.parse(atob(str));
    Object.entries(data).forEach(([key, value]) => {
      const input = document.querySelector(`input[name="${key}"]`);
      if (input) input.value = value;
    });
  }
  if (search.has("returning_client")) {
    const promo_input = document.getElementById("promo_code");
    const promo_input2 = document.getElementById("promo_code2");
    const container = promo_input?.closest("div");
    const container2 = promo_input2?.closest("div");
    container?.remove();
    container2?.remove();
    STEPS_NAVIGATION_BUTTON_TOP_PREV.step_6 = 5.65;
    STEPS_NAVIGATION_BUTTON_TOP_NEXT.step_6 = 14;
  }
}
const htmlCollection = document.getElementsByClassName("radio-button-field");
const options = Array.from(htmlCollection);
console.log("options");
console.log(options);
console.log("-----------------------");
const radioButtonWrap = Array.from(
  document.getElementsByClassName("radio-button-wrap")
);

document.addEventListener("DOMContentLoaded", () => {
  prefillForm();
  radioButtonWrap.forEach((wrap) => {
    wrap.firstChild.classList.add("option-active");
    wrap.firstChild.firstChild.setAttribute("checked", true);
  });
});

const customOptions = (option) => {
  options.forEach((opt) => opt.classList.remove("option-active"));
  option.currentTarget.removeAttribute("checked");
  option.currentTarget.classList.add("option-active");
};
if (options)
  options.forEach((opt) => opt.addEventListener("click", customOptions));

document.addEventListener("DOMContentLoaded", () => {
  const seoChild = document.getElementById("section-hero-seo-child");
  const seoRoot = document.getElementById("section-hero-seo-root");
	const formChild = document.getElementById("hero-child-form-wrapper");
	const formRoot = document.getElementById("hero-root-form-wrapper");
	
	if(seoChild.classList.contains('w-condition-invisible')) {
		console.log("We're on a Root page")
		formChild.remove()
		const nextButton = document.getElementById("next-button-change-form");
		const previousButton = document.getElementById("previous-button-change-form");
		const submitButton = document.getElementById("btn-submit-change-syndic");
		const change_syndic_form = document.getElementById("email-form");
	} else {
		console.log("We're on a Child page")
		formRoot.remove()
		const nextButton2 = document.getElementById("next-button-change-form2");
		const previousButton2 = document.getElementById("previous-button-change-form2");
		const submitButton2 = document.getElementById("btn-submit-change-syndic2");
		const change_syndic_form2 = document.getElementById("email-form2");
	}
	
	if(seoChild.classList.contains('w-condition-invisible')) {

	} else {

	}
	
  let counter = 1;
  

  $(document).on("keypress", function (e) {
    if (e.which == 13) {
	if(seoChild.classList.contains('w-condition-invisible')) {
		if (submitButton && counter === LAST_STEP)
			$("#btn-submit-change-syndic").click();
		else if (nextButton && counter !== LAST_STEP) {
			if (counter === 4) {
			  if (!$("#next-button-change-form").hasClass("disable"))
			    $("#next-button-change-form").click();
			} else $("#next-button-change-form").click();
		}
	} else {
		if (submitButton2 && counter === LAST_STEP)
        $("#btn-submit-change-syndic2").click();
      else if (nextButton2 && counter !== LAST_STEP) {
        if (counter === 4) {
          if (!$("#next-button-change-form2").hasClass("disable"))
            $("#next-button-change-form2").click();
        } else $("#next-button-change-form2").click();
      }
	}   
    }
  });
	
	
	
	
	if(seoChild.classList.contains('w-condition-invisible')) {
		
		const bar = new ProgressBar.Line(document.getElementById("progress-bar"), {
			strokeWidth: 20,
			easing: "easeInOut",
			duration: 1400,
			color: "#00CC88",
			trailColor: "#EEEEEE",
			trailWidth: 20,
			svgStyle: { width: "100%", height: "15px" },
		});
		
		bar.animate(0.14);
		
	} else {
		
		const bar2 = new ProgressBar.Line(document.getElementById("progress-bar2"), {
			strokeWidth: 20,
			easing: "easeInOut",
			duration: 1400,
			color: "#00CC88",
			trailColor: "#EEEEEE",
			trailWidth: 20,
			svgStyle: { width: "100%", height: "15px" },
		});
		
		bar2.animate(0.14);
		
	}

  const former_management_inputs = Array.from(
    document.getElementsByName("former_management")
  );
  const number_lots_inputs = Array.from(
    document.getElementsByName("number_lots")
  );
  const owner_type_inputs = Array.from(
    document.getElementsByName("owner_type")
  );
	
	

  const addStyleOptionSelected = (list, name) => {
    const change_syndic_form_data = new FormData(change_syndic_form);
    const prospect_info = {};
    const data_prospect = [...change_syndic_form_data.entries()];

    data_prospect.forEach((v) => {
      prospect_info[v[0]] = v[1];
    });
    list.forEach(
      (input) =>
        input.value === prospect_info[name] &&
        input.parentElement.classList.add("option-active")
    );
  };

  const addStyleOptionSelected2 = (list, name) => {
    const change_syndic_form_data2 = new FormData(change_syndic_form2);
    const prospect_info2 = {};
    const data_prospect2 = [...change_syndic_form_data2.entries()];

    data_prospect2.forEach((v) => {
      prospect_info2[v[0]] = v[1];
    });
    list.forEach(
      (input) =>
        input.value === prospect_info2[name] &&
        input.parentElement.classList.add("option-active")
    );
  };

  const styleSelectedOption = () => {
    addStyleOptionSelected(former_management_inputs, "former_management");
    addStyleOptionSelected(number_lots_inputs, "number_lots");
    addStyleOptionSelected(owner_type_inputs, "owner_type");
  };

  const styleSelectedOption2 = () => {
    addStyleOptionSelected2(former_management_inputs, "former_management");
    addStyleOptionSelected2(number_lots_inputs, "number_lots");
    addStyleOptionSelected2(owner_type_inputs, "owner_type");
  };

  function validatePhone(num) {
    if (num.indexOf("+33") != -1) num = num.replace("+33", "0");
    var re = /^0[6-7]\d{8}$/;
    return re.test(num);
  }

  function validateForm(submitVerifications) {
    let inputsEmpty = false;
    let phoneValid = false;
    for (let v of submitVerifications) {
      if ($(v).val().length == 0) inputsEmpty = true;
    }
    phoneValid = validatePhone($("#phone_number-2").val());
    if (phoneValid && !inputsEmpty) {
      submitButton.classList.remove("disable");
    } else {
      submitButton.classList.add("disable");
    }
  }

  function validateForm2(submitVerifications) {
    let inputsEmpty = false;
    let phoneValid = false;
    for (let v of submitVerifications) {
      if ($(v).val().length == 0) inputsEmpty = true;
    }
    phoneValid2 = validatePhone($("#phone_number-3").val());

    if (phoneValid2 && !inputsEmpty) {
      submitButton2.classList.remove("disable");
    } else {
      submitButton2.classList.add("disable");
    }
  }

  const lastStepValidation = (counter) => {
    let inputsEmpty;
    let phoneValid;
    if (counter === 6) {
      submitButton.classList.add("disable");
      let submitVerifications =
        document.getElementsByClassName("submitverification");
      for (let s of submitVerifications) {
        if ($(s).val().length !== 0) {
          validateForm(submitVerifications);
        }
        $(s).keyup(() => validateForm(submitVerifications));
      }
    } else {
      submitButton.classList.remove("disable");
    }
  };

  const lastStepValidation2 = (counter) => {
    let inputsEmpty;
    let phoneValid;
    if (counter === 6) {
      submitButton2.classList.add("disable");
      let submitVerifications = document.getElementsByClassName(
        "submitverification2"
      );
      for (let s of submitVerifications) {
        if ($(s).val().length !== 0) {
          validateForm2(submitVerifications);
        }
        $(s).keyup(() => validateForm2(submitVerifications));
      }
    } else {
      submitButton2.classList.remove("disable");
    }
  };

  const zipCodeValidation = (counter) => {
    if (counter === 4) {
      nextButton.classList.add("disable");
      document.getElementById("zipcode-input").onkeyup = function (e) {
        if (e.currentTarget.value.length === 5) {
          nextButton.classList.remove("disable");
        } else {
          nextButton.classList.add("disable");
        }
      };
    } else {
      nextButton.classList.remove("disable");
    }
  };

  const zipCodeValidation2 = (counter) => {
    if (counter === 4) {
      nextButton2.classList.add("disable");
      document.getElementById("zipcode-input2").onkeyup = function (e) {
        if (e.currentTarget.value.length === 5) {
          nextButton2.classList.remove("disable");
        } else {
          nextButton2.classList.add("disable");
        }
      };
    } else {
      nextButton2.classList.remove("disable");
    }
  };

  const setHeigthActionsButtons = () => {
    if (submitButton && counter === LAST_STEP) {
      submitButton.style.top = `${
        STEPS_NAVIGATION_BUTTON_TOP_NEXT[`step_${counter}`]
      }em`;
      submitButton.style.display = "block";
    }
    if (submitButton && counter !== LAST_STEP)
      submitButton.style.display = "none";
    if (nextButton)
      nextButton.style.top = `${
        STEPS_NAVIGATION_BUTTON_TOP_NEXT[`step_${counter}`]
      }em`;
    if (previousButton)
      previousButton.style.top = `${
        STEPS_NAVIGATION_BUTTON_TOP_PREV[`step_${counter}`]
      }em`;
  };

  const setHeigthActionsButtons2 = () => {
    if (submitButton2 && counter === LAST_STEP) {
      submitButton2.style.top = `${
        STEPS_NAVIGATION_BUTTON_TOP_NEXT[`step_${counter}`]
      }em`;
      submitButton2.style.display = "block";
    }
    if (submitButton2 && counter !== LAST_STEP)
      submitButton2.style.display = "none";
    if (nextButton2)
      nextButton2.style.top = `${
        STEPS_NAVIGATION_BUTTON_TOP_NEXT[`step_${counter}`]
      }em`;
    if (previousButton2)
      previousButton2.style.top = `${
        STEPS_NAVIGATION_BUTTON_TOP_PREV[`step_${counter}`]
      }em`;
  };

  const updateProgressBar = (counter) => {
    bar.animate(STEPS_PROGRESS_BAR[`step_${counter}`]);
  };

  const updateProgressBar2 = (counter) => {
    bar2.animate(STEPS_PROGRESS_BAR[`step_${counter}`]);
  };

  const setNextButtonClass = () => {
    const nextButtonLink = nextButton.getElementsByTagName("a")[0];

    Object.values(NEXT_BUTTON_CLASSES).forEach((c) => {
      nextButtonLink.classList.remove(c);
    });

    nextButtonLink.classList.add(NEXT_BUTTON_CLASSES[`step_${counter}`]);
  };

  const setNextButtonClass2 = () => {
    const nextButtonLink = nextButton2.getElementsByTagName("a")[0];

    Object.values(NEXT_BUTTON_CLASSES).forEach((c) => {
      nextButtonLink.classList.remove(c);
    });

    nextButtonLink.classList.add(NEXT_BUTTON_CLASSES[`step_${counter}`]);
  };

  const incrementCounter = () => {
    counter += 1;
    zipCodeValidation(counter);
    updateProgressBar(counter);
    styleSelectedOption();
    setHeigthActionsButtons();
    setNextButtonClass();
    lastStepValidation(counter);
  };

  const incrementCounter2 = () => {
    counter += 1;
    zipCodeValidation2(counter);
    updateProgressBar2(counter);
    styleSelectedOption2();
    setHeigthActionsButtons2();
    setNextButtonClass2();
    lastStepValidation2(counter);
  };
	
	const decrementCounter = () => {
    counter -= 1;
    zipCodeValidation(counter);
    updateProgressBar(counter);
    styleSelectedOption();
    setHeigthActionsButtons();
    setNextButtonClass();
    lastStepValidation(counter);
  };
	
  const decrementCounter2 = () => {
    counter -= 1;
    zipCodeValidation2(counter);
    updateProgressBar2(counter);
    styleSelectedOption2();
    setHeigthActionsButtons2();
    setNextButtonClass2();
    lastStepValidation2(counter);
  };
	
	if(seoChild.classList.contains('w-condition-invisible')) {
		if (nextButton) {
			nextButton.addEventListener("click", incrementCounter);
			setNextButtonClass();
		}
		if (previousButton)
    	previousButton.addEventListener("click", decrementCounter);
	} else {
		if (nextButton2) {
			nextButton2.addEventListener("click", incrementCounter2);
			setNextButtonClass2();
		}
		if (previousButton2)
    	previousButton2.addEventListener("click", decrementCounter2);
	}

});

/*----------------------------------*/


const processForm = (e) => {
  if (e.preventDefault) e.preventDefault();

  const formData = new FormData(e.target);
  const prospect = {};
  const data = [...formData.entries()];

  data.forEach((v) => {
    prospect[v[0]] = v[1];
  });

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://api-hubspot.matera.eu/prospects", true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.setRequestHeader("Accept", "application/json");

  xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4) {
      if (xhttp.status == 200) {
        const res = xhttp.responseText;
        const { result } = JSON.parse(res);
        const { demo_request_key, awin_id, owner_type, former_management } =
          result;
        window.location.replace(
          `/fr/demo-extra-details?demo_request_key=${demo_request_key}&awin_id=${awin_id}&owner_type=${
            owner_type || ""
          }&former_management=${former_management || ""}`
        );
      } else {
        document.getElementsByClassName("w-form-fail")[0].style.display =
          "block";
      }
    }
  };
  prospect.market = "fr";
  prospect.origin = "demo";
  prospect.entry_point = Cookies.get("entry_point");
  prospect.utm_term = Cookies.get("utm_term");
  prospect.utm_campaign = Cookies.get("utm_campaign");
  prospect.utm_source = Cookies.get("utm_source");
  prospect.utm_medium = Cookies.get("utm_medium");
  prospect.ad_group = Cookies.get("ad_group");

  // Referral
  const search = new URLSearchParams(window.location.search);
  if (search.has("form_data")) {
    const str = search.get("form_data").replace(/\s/g, "+");
    const attributes = JSON.parse(atob(str));
    const REFERRER_ATTRIBUTES = [
      "referrer_first_name",
      "referrer_last_name",
      "referrer_email",
      "referrer_deal_id",
      "self_referral",
    ];

    REFERRER_ATTRIBUTES.forEach((key) => {
      if (attributes[key]) prospect[key] = attributes[key];
    });
  }

  if (window.location.search) {
    const search = new URLSearchParams(window.location.search);
    const from = search.get("from");
    if (from) {
      prospect.main_type = from;
    }
  }

  xhttp.send(JSON.stringify({ prospect }));

  return false;
};

const processForm2 = (e) => {
  if (e.preventDefault) e.preventDefault();

  const formData = new FormData(e.target);
  const prospect = {};
  const data = [...formData.entries()];

  data.forEach((v) => {
    prospect[v[0]] = v[1];
  });

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://api-hubspot.matera.eu/prospects", true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.setRequestHeader("Accept", "application/json");

  xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4) {
      if (xhttp.status == 200) {
        const res = xhttp.responseText;
        const { result } = JSON.parse(res);
        const { demo_request_key, awin_id, owner_type, former_management } =
          result;
        window.location.replace(
          `/fr/demo-extra-details?demo_request_key=${demo_request_key}&awin_id=${awin_id}&owner_type=${
            owner_type || ""
          }&former_management=${former_management || ""}`
        );
      } else {
        document.getElementsByClassName("w-form-fail")[0].style.display =
          "block";
      }
    }
  };
  prospect.market = "fr";
  prospect.origin = "demo";
  prospect.entry_point = Cookies.get("entry_point");
  prospect.utm_term = Cookies.get("utm_term");
  prospect.utm_campaign = Cookies.get("utm_campaign");
  prospect.utm_source = Cookies.get("utm_source");
  prospect.utm_medium = Cookies.get("utm_medium");
  prospect.ad_group = Cookies.get("ad_group");

  // Referral
  const search = new URLSearchParams(window.location.search);
  if (search.has("form_data")) {
    const str = search.get("form_data").replace(/\s/g, "+");
    const attributes = JSON.parse(atob(str));
    const REFERRER_ATTRIBUTES = [
      "referrer_first_name",
      "referrer_last_name",
      "referrer_email",
      "referrer_deal_id",
      "self_referral",
    ];

    REFERRER_ATTRIBUTES.forEach((key) => {
      if (attributes[key]) prospect[key] = attributes[key];
    });
  }

  if (window.location.search) {
    const search = new URLSearchParams(window.location.search);
    const from = search.get("from");
    if (from) {
      prospect.main_type = from;
    }
  }

  xhttp.send(JSON.stringify({ prospect }));

  return false;
};

	if(seoChild.classList.contains('w-condition-invisible')) {
		const form = document.getElementById("change-syndic-form");
		form.addEventListener("submit", processForm);
		document.getElementById("email-form").addEventListener(
			"keydown",
			function (e) {
				if (
					[
						"Space",
						"Enter",
						"ArrowUp",
						"ArrowDown",
						"ArrowLeft",
						"ArrowRight",
					].indexOf(e.code) > -1
				) {
					e.preventDefault();
					e.stopPropagation();
				}
			},
			true
		);
	} else {
		const form2 = document.getElementById("change-syndic-form2");
		form2.addEventListener("submit", processForm2);
		document.getElementById("email-form2").addEventListener(
			"keydown",
			function (e) {
				if (
					[
						"Space",
						"Enter",
						"ArrowUp",
						"ArrowDown",
						"ArrowLeft",
						"ArrowRight",
					].indexOf(e.code) > -1
				) {
					e.preventDefault();
					e.stopPropagation();
				}
			},
			true
		);
	}


