import "./style.scss";
import gsap from "gsap";

const dualshockBlanc = document.querySelector(".dualshock-blanc");
const dualshockGold = document.querySelector(".dualshock-gold");
const dualshockRose = document.querySelector(".dualshock-rose");
const dualshock = document.querySelector(".dualshock");
const main = document.querySelector(".main");
const cart = document.querySelector(".cart");

dualshockBlanc.addEventListener("click", () => {
  gsap.to(dualshock, {
    y: "480px",
    duration: 0.5,
  });
  gsap.to(".card-choice div", {
    y: "0",
    duration: 0.5,
  });
  gsap.to(".console svg path", {
    fill: "#005FF9",
    duration: 0.5,
  });
  gsap.to(main, {
    background: "#5997fb",
    duration: 0.5,
  });
  gsap.to(".wishlist svg path", {
    fill: "#5997fb",
    duration: 0.5,
  });
  gsap.to(cart, {
    border: "1.5px solid #337ffa",
    background: "#337ffa",
    boxShadow: "0px 6px 37px 0px rgba(51, 127, 250, 0.53)",
    duration: 0.5,
  });
  gsap.to(".card-color div", {
    background: "#5997fb",
    duration: 0.5,
  });
});

dualshockRose.addEventListener("click", () => {
  gsap.to(dualshock, {
    y: "50px",
    duration: 0.5,
  });
  gsap.to(".card-choice div", {
    y: "-24px",
    duration: 0.5,
  });
  gsap.to(".console svg path", {
    fill: "#fa009f",
    duration: 0.5,
  });
  gsap.to(main, {
    background: "#fa009f",
    duration: 0.5,
  });
  gsap.to(".wishlist svg path", {
    fill: "#fa009f",
    duration: 0.5,
  });
  gsap.to(cart, {
    border: "1.5px solid #FA009F",
    background: "#FA009F",
    boxShadow: "0px 6px 37px 0px rgba(250, 0, 159, 0.53)",
    duration: 0.5,
  });
  gsap.to(".card-color div", {
    background: "#fa009f",
    duration: 0.5,
  });
});

dualshockGold.addEventListener("click", () => {
  gsap.to(dualshock, {
    y: "-480px",
    duration: 0.5,
  });
  gsap.to(".card-choice div", {
    y: "-48px",
    duration: 0.5,
  });
  gsap.to(".console svg path", {
    fill: "#ecab2c",
    duration: 0.5,
  });
  gsap.to(main, {
    background: "#ecab2c",
    duration: 0.5,
  });
  gsap.to(".wishlist svg path", {
    fill: "#ecab2c",
    duration: 0.5,
  });
  gsap.to(cart, {
    border: "1.5px solid #ECAB2C",
    background: "#ECAB2C",
    boxShadow: "0px 6px 37px 0px rgba(236, 171, 44, 0.53)",
    duration: 0.5,
  });
  gsap.to(".card-color div", {
    background: "#ecab2c",
    duration: 0.5,
  });
});
