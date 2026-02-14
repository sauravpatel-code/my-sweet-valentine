
# 💝 Valentine's Day Website for Butku

A romantic, interactive multi-page experience with a quiz, a fun "Be My Valentine" challenge, and a heartfelt love letter.

---

## Page 1: Welcome / Landing Page
- Beautiful romantic background (soft gradient or hearts)
- Centered message box with:
  - ❤️ Heart emoji on top
  - **"Hey Butku!"** in bold cursive
  - "I made something special just for you because you mean the world to me."
  - 🎁 **"Open your gift"** button

---

## Pages 2–5: Quiz (4 Questions)
Each question is displayed in a styled card/box. The user selects one of 4 options.

**Question 1:** "When did we meet first?"
- Options: June 1 2023 / July 15 2023 / **Oct 1 2023** ✅ / Jan 3 2024
- Wrong popup (3s): "Bhulakar das 😠 Hint du? - Physically first meet"
- Correct popup (3s): "😘 Wahh! I love you Jaan ❤️ Score: X/4" → next page

**Question 2:** "What was our first meal together?"
- Options: Chitti wale momos / Ek dusre k lips / **Purukiya** ✅ / Mere hath k chaate
- Wrong popup (3s): "Kya H?? 😤 Sab bhul jati! Sabse first yaad kr"
- Correct popup (3s): "🤗 Thank you my dear ❤️ Score: X/4" → next page

**Question 3:** "When was this photo taken?" (with a placeholder image you can swap)
- Options: **July 14, 2024** ✅ / Your birth date / June 14, 2024 / Issi janam me
- Wrong popup (3s): "😡 Excuse me madam! Ab jada ho rha"
- Correct popup (3s): "🥳 Hurray!! Aapne jita h mera dil 💝 Score: X/4" → next page

**Question 4:** "When we will get married??"
- Options: Next year / Ho chuki sadi, ab bacche krne h / Aaj hi bhaga le / **Kubul h? Kubul h? Kubul h?** ✅
- Wrong popup (3s): "🫣 Really? 👉👈"
- Correct popup (3s): "🫶 Come with milk tonight 🥹 Score: X/4" → next page

Score only increments if answered correctly on the **first attempt**.

---

## Page 6: "Will You Be My Valentine?" Challenge
- A box with the question: "Will you be my valentine for whole life? 💐"
- A placeholder image (swappable)
- Two buttons: **Yes 💖** and **No 🙁**
- Each time the "No" button is clicked:
  - The **Yes** button grows larger
  - The **No** button shrinks and changes its text through 11 stages: "Sach me?" → "Are you sure?" → "Soch le?" → "Dil se pucch le" → "You might regret this" → "Last chance" → "Yes button misses you" → "This would be a mistake" → "Is it your final answer" → "You're breaking my heart" → "💔" → then hides completely
- Eventually only the big **Yes** button remains

---

## Page 7: Celebration + Love Letter
When **Yes** is clicked, a celebration box appears for **5 seconds**:
- **"I knew it dear! 💖"** (bold)
- A placeholder GIF (swappable)
- "I Love You so so so so so so ....... much ❤️"
- *"wait for it......"* (smaller text)

After 5 seconds, transitions to the **love letter** displayed beautifully in a styled box with the full romantic letter in cursive/elegant typography.

---

## Design & Feel
- Romantic color palette (pinks, reds, soft gradients)
- Smooth page transitions and animations
- Hearts and sparkle decorations throughout
- Mobile-friendly so she can open it on her phone
- Placeholder images clearly marked so you can easily swap them in the code
