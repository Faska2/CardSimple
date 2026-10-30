/**
 * ==========================================================================
 * PREMIUM DIGITAL BUSINESS CARD - APPLICATION LOGIC
 * ==========================================================================
 * 
 * Instructions:
 * Edit the `profile` object below to customize all information on the card.
 * Empty fields will be automatically hidden from the interface.
 */

const profile = {
  fullName: "Hamza Ait Ayach",
  jobTitle: "Financial Performance Analyst",
  company: "AXA",
  logo: "assets/logo.png",
  profileImage: "assets/profile.jpg",
  phone: "+33 7 59 53 53 64",
  email: "hamza.aitayach@axa.com",
  whatsapp: "+33 7 59 53 53 64",
  website: "https://www.axa.com",
  biography: "Financial Performance Analyst at AXA specializing in FP&A, Corporate Controlling, EPM & Analytics, and Finance Transformation. Alumnus of ICN Business School.",
  address: "Paris, France",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/hamza-ait-ayach-/",
    x: "",
    instagram: "",
    facebook: ""
  }
};

/* --- Social Icons SVG Map --- */
const SOCIAL_ICONS = {
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
  website: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
};

/* --- DOM Ready Handler --- */
document.addEventListener("DOMContentLoaded", () => {
  renderProfile();
  initActions();
  initQRCodeModal();
});

/**
 * Dynamically renders the profile information into the DOM.
 * Hides empty or missing fields cleanly.
 */
function renderProfile() {
  // 1. Full Name
  const nameEl = document.getElementById("profile-name");
  if (profile.fullName && profile.fullName.trim() !== "") {
    const parts = profile.fullName.trim().split(" ");
    if (parts.length > 1) {
      const firstName = parts[0];
      const remainingNames = parts.slice(1).join(" ");
      nameEl.innerHTML = `<span>${escapeHTML(firstName)}</span><span>${escapeHTML(remainingNames)}</span>`;
    } else {
      nameEl.innerHTML = `<span>${escapeHTML(profile.fullName)}</span>`;
    }
    document.title = `${profile.fullName} | Digital Business Card`;
  } else {
    nameEl.style.display = "none";
  }

  // 2. Job Title
  const titleEl = document.getElementById("profile-title");
  if (profile.jobTitle && profile.jobTitle.trim() !== "") {
    titleEl.textContent = profile.jobTitle;
  } else {
    titleEl.style.display = "none";
  }

  // 3. Company & Logo
  const companyWrapper = document.getElementById("company-wrapper");
  const companyNameEl = document.getElementById("company-name");
  const companyLogoEl = document.getElementById("company-logo");
  const logoWrapper = companyWrapper.querySelector(".logo-wrapper");

  const hasCompany = Boolean(profile.company && profile.company.trim() !== "");
  const hasLogo = Boolean(profile.logo && profile.logo.trim() !== "");

  if (hasCompany) {
    companyNameEl.textContent = profile.company;
  } else {
    companyNameEl.style.display = "none";
  }

  if (hasLogo) {
    companyLogoEl.src = profile.logo;
    companyLogoEl.onerror = () => {
      logoWrapper.style.display = "none";
    };
  } else {
    logoWrapper.style.display = "none";
  }

  if (!hasCompany && !hasLogo) {
    companyWrapper.style.display = "none";
  }

  // 4. Location / Address
  const locationWrapper = document.getElementById("location-wrapper");
  const locationText = document.getElementById("profile-address");
  if (profile.address && profile.address.trim() !== "") {
    locationText.textContent = profile.address;
    locationWrapper.style.display = "inline-flex";
  } else {
    locationWrapper.style.display = "none";
  }

  // 5. Profile Image
  const profileImgEl = document.getElementById("profile-img");
  if (profile.profileImage && profile.profileImage.trim() !== "") {
    profileImgEl.src = profile.profileImage;
    profileImgEl.onerror = () => {
      // Graceful fallback avatar if image fails to load
      profileImgEl.style.opacity = "0.2";
    };
  } else {
    profileImgEl.style.opacity = "0.2";
  }

  // 6. Contact Action Buttons (Phone, Email, SMS, WhatsApp)
  let visibleContactButtons = 0;

  // Phone Call
  const btnPhone = document.getElementById("btn-phone");
  if (profile.phone && profile.phone.trim() !== "") {
    btnPhone.href = `tel:${profile.phone.trim()}`;
    visibleContactButtons++;
  } else {
    btnPhone.style.display = "none";
  }

  // Email
  const btnEmail = document.getElementById("btn-email");
  if (profile.email && profile.email.trim() !== "") {
    const emailSubject = encodeURIComponent(`Contacting ${profile.fullName || 'you'}`);
    btnEmail.href = `mailto:${profile.email.trim()}?subject=${emailSubject}`;
    visibleContactButtons++;
  } else {
    btnEmail.style.display = "none";
  }

  // SMS
  const btnSms = document.getElementById("btn-sms");
  if (profile.phone && profile.phone.trim() !== "") {
    btnSms.href = `sms:${profile.phone.trim()}`;
    visibleContactButtons++;
  } else {
    btnSms.style.display = "none";
  }

  // WhatsApp
  const btnWhatsapp = document.getElementById("btn-whatsapp");
  const whatsappNumber = profile.whatsapp || profile.phone;
  if (whatsappNumber && whatsappNumber.trim() !== "") {
    const cleanPhone = whatsappNumber.replace(/[^\d]/g, "");
    const greeting = encodeURIComponent(`Hello ${profile.fullName || ''}, I found your digital business card!`);
    btnWhatsapp.href = `https://wa.me/${cleanPhone}?text=${greeting}`;
    visibleContactButtons++;
  } else {
    btnWhatsapp.style.display = "none";
  }

  // LinkedIn
  const btnLinkedin = document.getElementById("btn-linkedin");
  if (btnLinkedin) {
    if (profile.socialLinks && profile.socialLinks.linkedin && profile.socialLinks.linkedin.trim() !== "") {
      btnLinkedin.href = profile.socialLinks.linkedin.trim();
      btnLinkedin.style.display = "flex";
      visibleContactButtons++;
    } else {
      btnLinkedin.style.display = "none";
    }
  }

  // Hide entire contact buttons section if all are empty
  const contactSection = document.querySelector(".contact-actions-section");
  if (visibleContactButtons === 0 && contactSection) {
    contactSection.style.display = "none";
  }

  // 7. About Me Section
  const aboutCard = document.getElementById("about-card");
  const bioTextEl = document.getElementById("profile-bio");
  if (profile.biography && profile.biography.trim() !== "") {
    bioTextEl.textContent = profile.biography;
  } else {
    aboutCard.style.display = "none";
  }

  // 8. Social Links Section
  const socialCard = document.getElementById("social-card");
  const socialContainer = document.getElementById("social-links-container");
  let hasSocialLinks = false;

  if (profile.socialLinks && typeof profile.socialLinks === "object") {
    socialContainer.innerHTML = "";
    for (const [platform, url] of Object.entries(profile.socialLinks)) {
      if (platform.toLowerCase() === "linkedin" && btnLinkedin && btnLinkedin.style.display !== "none") {
        continue;
      }
      if (url && url.trim() !== "") {
        hasSocialLinks = true;
        const linkBtn = document.createElement("a");
        linkBtn.className = "social-link-btn";
        linkBtn.href = url.trim();
        linkBtn.target = "_blank";
        linkBtn.rel = "noopener noreferrer";
        linkBtn.setAttribute("aria-label", `Visit ${platform}`);
        linkBtn.title = platform.charAt(0).toUpperCase() + platform.slice(1);
        
        const iconSvg = SOCIAL_ICONS[platform.toLowerCase()] || SOCIAL_ICONS.website;
        linkBtn.innerHTML = iconSvg;
        socialContainer.appendChild(linkBtn);
      }
    }
  }

  if (hasSocialLinks) {
    socialCard.style.display = "block";
  } else {
    socialCard.style.display = "none";
  }

  // Update modal user preview details
  const modalName = document.getElementById("modal-user-name");
  const modalSub = document.getElementById("modal-user-sub");
  if (modalName) modalName.textContent = profile.fullName || "Digital Profile";
  if (modalSub) {
    const subParts = [profile.jobTitle, profile.company].filter(Boolean);
    modalSub.textContent = subParts.join(" • ");
  }
}

/**
 * Initializes Core Action Listeners (Add to Contact, Share Profile).
 */
function initActions() {
  // 1. Add to Contact (Opens native Contacts app on phone)
  const addContactBtn = document.getElementById("btn-add-contact");
  if (addContactBtn) {
    addContactBtn.addEventListener("click", addToContacts);
  }

  // 2. Share Profile Button
  const shareBtn = document.getElementById("btn-share");
  if (shareBtn) {
    shareBtn.addEventListener("click", shareProfile);
  }
}

/**
 * Directly opens the Phone's native Contacts app to add this person.
 * - Android: Launches the Contacts app via Android Intent (action.INSERT).
 * - iOS: Directly opens the native Contact Card sheet (text/vcard stream).
 * - Desktop fallback: Opens or downloads the standardized .vcf card.
 */
async function addToContacts() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera || "";
  const isAndroid = /android/i.test(userAgent);
  const isIOS = (/iPad|iPhone|iPod/.test(userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) && !window.MSStream;

  const cleanName = (profile.fullName || "").trim();
  const cleanPhone = (profile.phone || "").replace(/[^\d+]/g, "");
  const cleanEmail = (profile.email || "").trim();
  const cleanCompany = (profile.company || "").trim();
  const cleanJob = (profile.jobTitle || "").trim();
  const cleanAddress = (profile.address || "").trim();
  const cleanNotes = (profile.biography || "").trim();
  const cleanWebsite = (profile.website || "").trim();

  // 1. ANDROID: Launch native Contacts App directly via Chrome Intent
  if (isAndroid) {
    try {
      showToast("Opening Contacts app...");
      let intentUri = "intent:#Intent;action=android.intent.action.INSERT;type=vnd.android.cursor.dir/contact;";
      if (cleanName) intentUri += `S.name=${encodeURIComponent(cleanName)};`;
      if (cleanPhone) intentUri += `S.phone=${encodeURIComponent(cleanPhone)};`;
      if (cleanEmail) intentUri += `S.email=${encodeURIComponent(cleanEmail)};`;
      if (cleanCompany) intentUri += `S.company=${encodeURIComponent(cleanCompany)};`;
      if (cleanJob) intentUri += `S.job_title=${encodeURIComponent(cleanJob)};`;
      if (cleanAddress) intentUri += `S.postal=${encodeURIComponent(cleanAddress)};`;
      if (cleanNotes) intentUri += `S.notes=${encodeURIComponent(cleanNotes)};`;
      intentUri += "end";

      window.location.href = intentUri;
      return;
    } catch (err) {
      console.warn("Android intent failed, falling back to vCard:", err);
    }
  }

  // Build standard vCard 3.0 string
  const nameParts = cleanName.split(" ");
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";

  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN;CHARSET=UTF-8:${escapeVCard(cleanName)}`,
    `N;CHARSET=UTF-8:${escapeVCard(lastName)};${escapeVCard(firstName)};;;`,
    cleanJob ? `TITLE;CHARSET=UTF-8:${escapeVCard(cleanJob)}` : "",
    cleanCompany ? `ORG;CHARSET=UTF-8:${escapeVCard(cleanCompany)}` : "",
    cleanPhone ? `TEL;TYPE=CELL,VOICE:${cleanPhone}` : "",
    cleanEmail ? `EMAIL;TYPE=WORK,INTERNET:${cleanEmail}` : "",
    cleanWebsite ? `URL:${cleanWebsite}` : "",
    cleanAddress ? `ADR;TYPE=WORK;CHARSET=UTF-8:;;;${escapeVCard(cleanAddress)};;;` : "",
    cleanNotes ? `NOTE;CHARSET=UTF-8:${escapeVCard(cleanNotes)}` : "",
    `REV:${new Date().toISOString()}`,
    "END:VCARD"
  ].filter(Boolean).join("\r\n");

  // 2. iOS (iPhone/iPad): Open native iOS Contact Card directly
  if (isIOS) {
    showToast("Opening Contact card...");
    const dataUri = `data:text/vcard;charset=utf-8,${encodeURIComponent(vcard)}`;
    window.location.href = dataUri;
    return;
  }

  // 3. Web Share API with File (Mobile devices supporting file share to Contacts)
  if (navigator.canShare) {
    try {
      const file = new File([vcard], `${cleanName.replace(/\s+/g, "_")}.vcf`, { type: "text/vcard" });
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: cleanName,
          text: `Add ${cleanName} to contacts`
        });
        return;
      }
    } catch (e) {
      if (e.name === "AbortError") return;
    }
  }

  // 4. Desktop / Universal Fallback: Prompt to open/save vCard
  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const filename = `${(cleanName || "contact").replace(/[^a-zA-Z0-9_-]/g, "_")}.vcf`;
  const downloadLink = document.createElement("a");
  const url = URL.createObjectURL(blob);
  downloadLink.href = url;
  downloadLink.download = filename;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
  URL.revokeObjectURL(url);

  showToast("Opening contact file...");
}

/**
 * Shares the profile using Web Share API with clipboard fallback.
 */
async function shareProfile() {
  const shareUrl = window.location.href.split("#")[0];
  const shareTitle = `${profile.fullName || "Profile"} | Digital Business Card`;
  const shareText = `Connect with ${profile.fullName || "me"} (${profile.jobTitle || ""}${profile.company ? " at " + profile.company : ""})`;

  if (navigator.share && navigator.canShare && navigator.canShare({ url: shareUrl })) {
    try {
      await navigator.share({
        title: shareTitle,
        text: shareText,
        url: shareUrl
      });
      return;
    } catch (err) {
      if (err.name === "AbortError") {
        return; // User cancelled the share dialog
      }
    }
  }

  // Fallback: Copy URL to clipboard
  copyToClipboard(shareUrl, "Profile link copied to clipboard!");
}

/**
 * Initializes QR Code Modal Dialog & QR Code Canvas generation.
 */
function initQRCodeModal() {
  const qrBtn = document.getElementById("btn-qr");
  const modal = document.getElementById("qr-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const qrTarget = document.getElementById("qr-target");
  const copyLinkBtn = document.getElementById("modal-copy-link-btn");
  const downloadQrBtn = document.getElementById("modal-download-qr-btn");

  let qrGenerated = false;

  // Render QR Code
  function generateQRCode() {
    if (qrGenerated) return;

    const currentUrl = window.location.href.split("#")[0];
    
    // Check if qrcode library is loaded
    if (typeof qrcode !== "undefined") {
      try {
        // Create QR Code (typeNumber 0 = auto-detect, 'M' error correction)
        const qr = qrcode(0, "M");
        qr.addData(currentUrl);
        qr.make();

        const moduleCount = qr.getModuleCount();
        const cellSize = 6;
        const margin = 16;
        const canvasSize = moduleCount * cellSize + margin * 2;

        const canvas = document.createElement("canvas");
        canvas.width = canvasSize;
        canvas.height = canvasSize;
        canvas.id = "qr-canvas";

        const ctx = canvas.getContext("2d");
        // Background
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvasSize, canvasSize);

        // Modules
        ctx.fillStyle = "#0c0c0e";
        for (let row = 0; row < moduleCount; row++) {
          for (let col = 0; col < moduleCount; col++) {
            if (qr.isDark(row, col)) {
              ctx.fillRect(margin + col * cellSize, margin + row * cellSize, cellSize, cellSize);
            }
          }
        }

        qrTarget.innerHTML = "";
        qrTarget.appendChild(canvas);
        qrGenerated = true;
        return;
      } catch (err) {
        console.error("QR Code canvas generation failed, falling back to SVG:", err);
      }
    }

    // Fallback: Render SVG or simple placeholder if script wasn't loaded
    qrTarget.innerHTML = `<div style="padding: 20px; font-size: 13px; color: #111;">${escapeHTML(currentUrl)}</div>`;
  }

  // Open Modal
  function openModal() {
    generateQRCode();
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  // Close Modal
  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (qrBtn) qrBtn.addEventListener("click", openModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  // Close when clicking modal backdrop
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });

  // Modal Copy Link Button
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener("click", () => {
      const url = window.location.href.split("#")[0];
      copyToClipboard(url, "Profile link copied to clipboard!");
    });
  }

  // Modal Download QR Image Button
  if (downloadQrBtn) {
    downloadQrBtn.addEventListener("click", () => {
      const canvas = document.getElementById("qr-canvas");
      if (canvas) {
        const dataUrl = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = dataUrl;
        a.download = `${(profile.fullName || "profile").replace(/\s+/g, "_")}_QRCode.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        showToast("QR code image downloaded");
      } else {
        showToast("QR code not ready");
      }
    });
  }
}

/**
 * Universal clipboard copy with user feedback.
 */
function copyToClipboard(text, successMessage = "Copied to clipboard!") {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
      .then(() => showToast(successMessage))
      .catch(() => fallbackCopy(text, successMessage));
  } else {
    fallbackCopy(text, successMessage);
  }
}

function fallbackCopy(text, successMessage) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
    showToast(successMessage);
  } catch (err) {
    showToast("Unable to copy to clipboard");
  } finally {
    document.body.removeChild(textArea);
  }
}

/**
 * Toast Notification Popup
 */
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById("toast-notification");
  const toastText = document.getElementById("toast-text");
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.add("is-visible");

  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  toastTimeout = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2800);
}

/**
 * Utility: HTML Escaper
 */
function escapeHTML(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Utility: vCard string field escaper
 */
function escapeVCard(str) {
  return String(str)
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}
