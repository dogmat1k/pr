"use strict";
var playButton = {
    el: document.querySelector(".js-button"),
    states: {
        playing: {
            nextState: "paused",
            iconEl: document.querySelector("#pause-icon")
        },
        paused:  {
            nextState: "playing",
            iconEl: document.querySelector("#play-icon")
        }
    },
    animationDuration: 350,
    init: function () {
        this.setInitialState();
        this.replaceUseEl();
        this.el.addEventListener("click", this.goToNextState.bind(this));
    },
    setInitialState: function () {
      var initialIconRef = this.el.querySelector("use").getAttribute("xlink:href");
      var stateName = this.el.querySelector(initialIconRef).getAttribute("data-state");
      this.setState(stateName);
    },
    replaceUseEl: function () {
        d3.select(this.el.querySelector("use")).remove();
        d3.select(this.el.querySelector("svg")).append("path")
            .attr("class", "js-icon")
            .attr("d", this.stateIconPath());
    },
    goToNextState: function () {
        this.setState(this.state.nextState);
        d3.select(this.el.querySelector(".js-icon")).transition()
            .duration(this.animationDuration)
            .attr("d", this.stateIconPath());
    },
    setState: function (stateName) {
        this.state = this.states[stateName];
    },
    stateIconPath: function () {
        return this.state.iconEl.getAttribute("d");
    }
};
playButton.init();