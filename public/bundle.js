/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Requires
	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// requires
	__webpack_require__(2);
	let loadChart = __webpack_require__(5);

	loadChart.hotness ("slot1");
	loadChart.rank    ("slot2");
	loadChart.top10   ("slot3");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(3);
	__webpack_require__(4);

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	// Loading a base64 favicon from a javascript file so:
	//  1. It doesn't take an extra server request, and
	//  2. Browsers can still cache it

	let bggStatsImage="iVBORw0KGgoAAAANSUhEUgAAAHIAAAByCAYAAACP3YV9AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEwAACxMBAJqcGAAABCRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjExNDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MTE0PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGRjOnN1YmplY3Q+CiAgICAgICAgICAgIDxyZGY6QmFnLz4KICAgICAgICAgPC9kYzpzdWJqZWN0PgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNjoxMjoxNCAwOToxMjo2MDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciAzLjY8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cu36w2oAACOJSURBVHgB7V0JnBXFma+q7n5vLhgEOb2NCQghEQZQrnglxqjJRlfU7M9kk43B7CYgGGEuBjowMMMR3UA0CzFrPBIjqDFKjElMjIYjKoOKFxoEY5QIyKUz847urtr/12/eTM+bfu/1m4MZ3Vf8mu6pruNf3/dV1fd9VdWPs3zoFAWqa39wkozaTzDBP6ak7FQZXc3EOWdKKUtxViW6Wtj/1/xOJD5FN4xeYyLRHUykm8EVq8szkkjRudCHaMf1PgSmc9TM5yIKKJZn5EdEEvKMzDPyI0KBj0gz8j0yz8iPCAU+Is3I98g8Iz8iFPiINEPvy+1w3WAx5zpgLJK95AYTwh20mkVYu33pgu/9w0Mv+OVcz4onqtce7T7NSBmzrissKl5oW3avUYgq1g2dRZqb6HER/UdBCDjG+krgTPZpRoJORcTEeDzWF0hW5AUhpdI0xr1RvfesWKhPKztwCvcZqe9LWPwkpk8z0g9wPs6fAnlG+tPlQxebZ+SHjmX+gPOM9KfLhy42z8gPHcv8AecZ6U+XD11snpEfOpb5A9Yrapb/F/ZizWCMa71ltXFBu8Hke0pjc5abFW/5Q83HZqIAeXZu1TS9d72GMPuNUJhFI80bgKeVkYr3HTdYKhbluuj6hr8CHVCBg4rZdu/6MknSWpzT9NgauMKOzT4SUrFwSdj6Bjxsb+X5ObKPCEpXYeQZ2VUK9pH8eUb2EUZ0FUaekV2lYB/Jn2dkH2FEV2HkGdlVCvaR/HlG9hFGdBWGoDN2fSXAu9MODFbl2/3dmzhTsaRi7U1sxEMd/gDLMEJG7+4I40zTNabZrJ1nAk4CW9fJZ9E7B0mTzCEMliXaYcOGHZswMxbC1ZseHg5slqUzIa+27PgVTHGg6h2CcQGq2NYBVsifSBKP7o7id0WizYPBR2x86h1s8Dkx27GbCYsXmwLWWCS6mnEOfI731TF8xszIlcOEevAYVpqvKk+BPAXyFMhTIE+BPAXyFDj2FOgzdlpXm/6plS8UFzYdOo5phYUOl8cJpUpgFUQcxhsdyT9gLHrkefP8I12tp7P50+GzpdMkmfF+V/HxsiWb7uksuNZ8ZBkIFoUJ08SUjGCV+DAM6D2CyXe0cOjvT5ef83Zr2m58OKdu66m2oyaj3s/BPJmEhfIhKL4/dPKwu+jr7l0hG48fxX/78bQXtvMOIdXTSrBt22qmvY74HjMCzzGBTyd86nMwUybCHh7qj4+BkXwfetVeuEA6hY9PXPZMNzXE07npEaUqJ+Yoxg/j+UUQ8I9KiN82VE/ejrddCmeBgbqtZoNxX+OaMQgL5KAVbDkcvUMcKk5pEtbPXQ8W7FX3jvfKsUA8tgN//1oo8euna875W5dAeTKfZT5xqq4XzALj/r1L+MBUtOVhjekPZcPHyxZvSmm1B1FXH8G9BAF17EXQmLKi6K3ar6Vjrdq+cHpDrsXPWK+0Pa9v+R66/1wQaJhy4hgAOukoIObSeSr4QZQVex97cv4kuPxlsy3+8LI55VCu2Cj9jPXrtT07T/ge2jiHa/pwCAvwddJZQPhI8Fy6xUjonuBC3asD31YffD3LyFRqgLFCD1NvOMqVnPtszdQ7UpOk+5vmmFC06YdcN76pHLvzBPKrAEQTmgHhR492nF3Y8/UzzYnf+bR5fuAp4VMrf1ccjpX8N9NC1/UoPmm/gQHvDs3RgK9tyjq2jGwhIkkZuoKStvXN7YumZ2UmhqoBmha6W+ihy6QVRyk9OIgIjB7oqdKO7wXGuxwl/vf5mrN3AXDaSsvqt5WyeOweYYSBj85ypk3qJ0Y5xfFWfBbwsVZ8vbKM5Q43mDyF0FaWmVtGZWuJJow6YRT0OJEIB6SLETM4FyO0UFGFzpx7Jt+8tSAjRitaJ0KEL0olZEza1Zdt+HgCn7J/XmY2FPYKI6kxBIgb4UGYov4jU+PGLd58DaRwZoJImVJ27zuae2UcjOHsR1tvnBJJV/q4xU9dI3oTn+BrGswJzZ1gJKmkqVe6ZmaOVzaUASW/RPOLX8rJtVtOEEz9AO9w61lJT60fwzi0YPu3p31iyi9S3yX/TuDTVgEaNKbewGc9lsSXIyNpJyxpUykXFAUMfVBkQjQkJdsZ4A6Nk/MhYbuI7KsOIS7VNzBkjaDee0wD2qCk9QHXeNWGq3hatdNS6usiFD6ht/AxprXioyMDgQIpANDoXuCOXZOaAR+ZDDk8PgjsnQ41/vMYCrFGl534cBpgjFXFWO8biDJ3e8udunxTv2hMfZU0wNwChA0LwSRQpIXS6EH/EOFqui6uLL1H6NBg49HVzy6a/ny6ulvwfY31Cr4QmXJrti2c9lwSX2BGohuCFs6+ZxdOfySZ2ee+rmzxlrGKy4ehmZ4ayIbizDFkkZVaVjTGvghb7BO5MNK1uciEsKxN8JDALuRvKqlCOKcxDFv+T0QDzgI3z+RaqJjsW0lMcJndVjvsU1J2dhaGGA3paUPMUpchbefwOcCnvPgU8PEWfGoUyi3Jis9Qq7zggjMykSvruNmwcMqLExZvegiKzJxsjKSegl7ZhHMUB72g3GfOv+wa6+13f3RIloxwTRrF3gPj5vRX1n1/XnR+h658xupHw6VHS09kjjMVzL0S/fRc4OyPkQb8bEmOAnA4rHpT5fTDybL97thO9GVo3dBRO1Tjlxz9gLaFsIMo/gYXn5kNH0uDDzULtiAVX66M9AWZGokBsyS91eVJTY1z5GtfYGfvfdoTTcY/izZ+0nW7eeLTPqJ3oWtFJXO+Abt0Y7p0u2ZfQkbeGy3XXROWbBoJL9PlTCpypY2CHchk7IMHnnWmPZSuDIp3lbOIGpszPsfFl3ZE88VnAR/z4Is2PrhNTv1VKr6sPSwlQ1Z/2MRlW86F+H2J3FPZQkJK1YOmyduVW2hFTkFXPS1bj06Wn9Awnbu216RnYjKt9w6n+WsNC6bU6/Lo2RhovyHjsccsFTZZCh5vHnrWmgpPwaSbEz4w/W4IWVomptZBf7v4Fk6pLwirSdIhfJHH4pL74gveIxMKwpDxS7ZcLIRn26LUMULKUoxNw7AKMVU56iIoGv2yMYHmImVH90hd3Z3aCGk74/G+IIgwkBIDD1FE14xbU8sJ+vfT5iXky/xZy5U1G4a2nPChHRFM1Z3Gt7l82gfZ8AVmpKt0QFnAvPBbyGRbY6lPc2iJbgwpEOiJWRzFLT3RwmfAvvdczWcOtBWWeILMjCIThxY0sgVyWWF+e9H+u/6qN22Zua1ID9mnMkYuvWDBcgxlaFaiKS1ZpA2VSTfefabq7LZ5XPGc8IEmL4m3Q694UXQnPmhnBwMz0gUBCqfrJUHNYQ6nObpQlDvWDRhqOoz1VA80zuOC2qMJhqvtDesmtBvLNREtc6T4nZJaUGgQRoltmR4hBRaYItxx7Eo8/pCwUcAHBQfQSBAkED4U2wEf06PjHUf8Xqmu4YNZSGdwb8uNkUGQp03jNrwZhvZfoakuxTLWn9IlRcr+mCPTvU6Jx4oKFztTIqFNkteCF2bwdadm8f8b4ygKwwZuT1AMU4nn74yPaI1iHfCRSwU2dyG97FIggRIsdOwY6Uqw3AX1e21/aT2VETxXOTASii+X7/mWR8IQWCB8S0jkh8ynvM0JH+aensWHgZJmuGMTYHjDLvwUjgHc16iFn5m4ZNMVvhWbSoBq/YHN93VqJClVwuG07HBsgmkCH++XEz7u9Di+Y8dIkJmI7q7oC22cEvoG7E5YecasRzFppoYcYKGnK03mkCG1rlz/XoQMORwuAj64GHocX44VwNKgqSf1onnEvWgepCtzIIUJTBVwtN9UOrj0ZoZe2JqDbDilYtlLSeRwsTCReb2wtfBueHBtzNzwYf9Bj+PLYY4k0qo45riOrivoG2BgCFNJGDpGAXyZZNtRF0xPOUw70o6RVvhfZfamlxsYuy2ZGINqY1CtkEZgqZxhybzH4o6hNSd8jNk9jq+tJ2ShQGJFgW/VdGNM6sUca7QutJGSO+OVsi9XdmwtmNjU4l9MXzKY6ToOuKiitb1kQoxG+4MzEvqp0k9P5k3eUS4NHy0jhc89wMiRLCv1nsAXkHSkJ3HRAR9s7W7Fl0OPRHO4irczjFNbyNg+RJFh/tDEJVvvh5mxAY0YkKlnEiOx5niCHY9/Ffnq3SI5fyuotulumGJy3IwZ67UNG65qcyEI3QKxsCG5g8aJKNTCcVRPMZ/52UWQ5T/+d9p6GSS0LKX54oPbLj0+fM8d5QfGF1CsWiBjTAkCntI8WzP5cQx6D9DaXtYAZmJjxSXEDEoLA2tb4OUr5MWSz+jd4078uLeeIwcOb8NOuLEhLjpc4MEnkfaXwqBDqrkHIZxtrgcrSFZS8JQa/canhn7Cm/zwviMNemZ89+aCL7ce6UUS4BkG7ysdTbCOGWkZCdwYvWvMiKFsA9trO84r8J7shyIzJNu+VZJ4rFr0Y5bbo6uTpe9ac0lsF2NvJ/9OvZct/ktxQAsnNSuzdfGqiMlc8JXAIU8jTlWysKz4lmzOCV9uPTKJIujdkSOCzHU00oGohdzQj6fH59jUdxHxN+xLpD+zBlexEvzbkxb/5dPZEsPHeXxZ7eafYMPU5djymC257/vnIo+/i7Hp9VzwQV+4fuLSzWf5FuiJdPEt2bwO3qorcsHXY4wsW7L5Y9Bgr3RX4T1A/R9dVhZgzhjgvoeKD+twM5kWgQJpx1wb6HDt3gm1Wyb55Zl885bCsu//ZQYT8SeFCF2HX/YJJiV+hZkmVQh8AYsgfIIPxCibEd+EJZuvdPFpoW/liq/7hlZ4PMawGXpR+NCJzBYXAvo8NPSUwHMdV5Yu7Ugb3bRfwt6chR5d6KevtKVLPJFtiqWvM6E8/a5s8eb7cRrrcUfwA9h0H8L8Oy7eKGdg68g4GiHI7OlqgIwBX3x2cHzY/onFawjr74FvgxDApzz4mtSVWCgYT9+u7Qy+4DvNQQDMd3QmYnuqygO9EPqJKsC+ExoahwAwNFUyLYJtg3DNBKWOalwf90zN2XtcIsOljwY/gvnv0pwaBpODtv9ToHzUa8BA18wJLFRu7sR/dMRBOvGbGmqmpuzhIXxbHnZ3v+ciGN2Mz22b46wO3iOJMVwMRMbPetrpPpIq6yo1pOljGEm31JWaL/m3O0RJe8+h/Qf3JuMg6Yov2bQOEnxpa1yQB9TfyngIHylLSna9B3asGi0WWwnfZR3fZYjpIXwBJ6EWYMQkKAi+l+t2w+EapMk1kFSB2r8nTc6bVw0p+C002o3UKzoVSLA6q5oGqJAPNh6DGdIn8OXGyACNyzUJ9UbsRXnP5sbtqXkbrp9g4WNYc9HD36WdAH0tED7Ma9gtaP2zt/H1LiNp3nU1P7Xk+TQHTbebU3ZJLm/CUIt1sN6F6ydImDvfwCDU6/h6jTIkwXTBVlrcUDNtjR+RknHbF0z7Ofy5N4DvdoLxyTedu0MZw6TefU3HXt5fYFiZ3Zv4uq81gWiKHoj5EL5VmhPf4tKe2bBw2iJSbLJlx/b4HyHZt5CukfafdiaQELgHbaW9EfU/6jK0MwX55NlWM/1WrOdch1fdiC/4dNIDjIQOC9EkiSfCuYzD4R465OOaLUruxFfwlmtObCpOLP/EhyZpo56tnvozIeVFOMX1eLLcID3LZSCYD737gJSxRWxIGN/eY290R+/2gm1YMO1OwufYsU7hQ1nAZyXwMbUrl3mXxjcvlq4/Y8ESRMLWBhWF0hgBUw9gaWs3tnnsgIW3KRYu2rpj3qfd37ntTGXPLJy6FWf1L37z9ZOuger/dcjMRKx/lra2I6k1t7SLNGyEPTIefxCrpj/GMP4GRYxfsomOjmUfYqkc90MIlCt7aMM34hrs4AuMj9nxBzEsAd9UF19ZbS74HM4nLN4yLju84CmkJhwBQ04wJ+6I4ujRd/cfSjUrgpeWPeX4ui1naDY/Xyr7kyD48RCiwchlwVcJAVLvwB76szCM7anLbxNrnzxJaUXHY3TIXIlh4FR5/J0d5tT9mRP6vyV8mNnP5z744IbbC1F6oqv4tJjTYW+wP5p8bJ4CeQocGwqgZ/duwPDH581bVcRKWDG+lBUqYpF3TdMM6KTtXexr1641du8+XKTrdolhFMRM8yb//avHAGZw/bbLYBSvWFB/ri70j1uOMxyGyHA42odV1iwfqBeogZhZB8EB2NSkFU1HVViP7DvhO5XLBg0w9AtsKUcQbihyw6GBD97zj8MDucEGMq1gcMy27wbi2b2F+pgxcsaMDaT+3aYZ+pm0mz8ZSMVFr8RyHZZvHKfNaZ5M0AfuxYY2Xmj6ekOQH7ltEHP3CxF2tMexVWLJpZfwHjNGtrQvTr+M59DWjtRAzCWOegiVmqQX/5aEO92CANYWyULJ6tToSfxtXaMna8mX3eMUyDOyx0l8bCrIOrTOmrU6PGiQXRyLRXljY0njoEGHLGiVOS860p5TKDsZ82FsUiKC7712U5g5c6YxYsSIcCwUCltxQythTdHhw4dHrr/++ixegPYAoFgHOYTTJU0bNBVH+/cPl74v8fEo/AIKO9pomoswBwUbsttm7hbs8+cv7wcb4EIp+XmYsiZAFRkOfcT1UiMxGsSPQtvch70dL2FGe1kJ+ZKMiddXrCin49HtwurVq8Pv7m/+NvZeDJI4+ou812H9bqjfXENeMNRHZdyOxw+wPyCBDbmwyB8r0LW16dT78vL6UhyHPwEHg8ZyIUdDIE4F5pMx3Y7AtgZgdxURKg/rhyyO92/B8/MivIlPRfTIn/7bNLFRuH2oNFeNxjc7rrHxiWPkPwP4rnWn8PbJ3L9I2UFZ21DuRsBt3ZGlGzqLx51X65fOv9cnG6uuvvkER9hfQNlTpHTGQeErBb3DaDu286gIWHgENP4HTsbs0Ll4GV8/eUnXI3vA9A7b/xLEQi0AyasWrLgWrsVK7F47kz49gsIpvh0GInjigtUHCuM0Lx3OfsNRagvy/U7Y1lPLllX/kzK5BA6xl0LhwhOpLBvusNTyvIVTuTptaG5FhUeifCyG0wj62Lq6m9zj27MgIP0OffBxJUOToep+FolwVIGdBIKG6ddxXHcvIhJ1tcdP9dFpaCJ+on1yFzIsXbq44k7U1Zq4YuGKqwvD4V9ij61bHn5gxgu1wzPRK/HLPG2vDLSlubnxsfrayi+0xTJmmqv7R2VkPpYUvgnH/TA00aVle9oQnRNYaUOWY2MTt5QRwH4RrHoKUB+LN4u/rlo1z/Vbu0MrOKzDnlul6foNYKmrVfpqll40Lc9oPDneRxq6GIn9Md9QurG3sqb+Z2EtWlNYyOWRRtVsxeMu0Xyyt4uihljuZzzboomRCAS2dVjudyg2Ujn6U5omSsmUIYYQbrrLuI9GTCW0CySAiQhN087AEs0dlYvqz0DMAk8ynGKIu7TwxKV99Ks7sX7Qflg2zZVDYk5kvWEY56IPgEGZBQTHeFvrBC0KIYSThCYmIe9N4WL2SnlN/feXL6lY7yo7UbtoFnrCDQ4IEZSBydKJ+NQI6m2UF+WMQIU0j6pIpNDTt5I5un5/b2//V1Hvc1QS9RQaGdpLc/A6CDPhxw6+yorqun8NnjP3lOvxheWY7awFjc5NCHerbAYqjNpIeInWFPD3KI1z9yMVwjTXwFshy4kYeJO2QOoZid6RnjeQbuzcj78UEoU3Uz1pC+vii3XroKwIcVu24wRBqyECQdJpvJ1LClLQfLmme27HnktRzZdTR53Uctponfqm7W/64TXpqP9dtrj8jxQr4nZkhtD1oSSV6YI7mSsVQYMxxCl3HqO5jBiXYG4ip9sxhERnnE3frUkGneYPuoIEqiuZPnlHnQYksZ0ExQboGyF8OwiDNxAeiqOGJi7DvWerH3M9NW1C6fFnjGkpD1ASuAlTtkD1tqVP5iP6tCk/kOwrNdoxmDYkOgvo3IgrSnM5huAEfg+tCY9t2fswK9cmi9JR+GUYW5J/d7gTMTAer8H5SDqICl+UHIwV8NPxWIa8ZYgbA3D9qMJotPk3b+zc/lBbIRrGPP46hARf7KRTU+xUTN84GpC2s9pSyTeRB9vGE8e7uXuYmTdhm3+7rZK33HhjBPP6T0G8H7rChMLh4qNh9jCmCGwjgb+W8/eg/VG+UkjBmSDMaD+NmfASJrQ1LBxFJ7WeR0uPAvdOXHQGDSYBtOA0geqXSh3BD8f9E2lbBQ6aP57V3ykbpFuP2Wxkpg6DZNCs2Ldw0HATPpRfJLga4jjWKHyPaCLEZBzUt5E6CK2BkfF4bNXS2pvcsql8iIccCC2Inn0DCgFd2enKsocUGkXPm0tmk+b4JK47KENFRd3p+BrkZ2Lx2EWO1FZt2LChtWub5nea0IAZSCaOsFJRYMdIQRlL43xqICkDMfYzzfiCLLT2RSLRVlCFzYWqqOioq5158/EC+z4rqq6D0B/ALq4n8cuJm/Ahrp0TRp+276qrPGclkYnMKi2s1kHornF7n7eg1meYQMz+OP15aO+uJ2CDnm3FCxVE7zyMEw+nEwK3l9nWA06cz40URVpxD4I/vek44U5oBw8O1IpLIwWoIG0A25FXjQanGkIs+hpo9wIS/4EykCn3zoHmUeiJF4N6I8N60TpvQbyiuv4OqM1f9yNuMiENVY4DjjK1H1L9Mhr0AqRiqyOcZ+vNyjeT6TLfafVj+XMo69N+dbmMlPIdW9fGrzLnBV6NR2NDuOLoUby6etkwfJigBFuocdhKxgpY+H3TvJGOyrvkq1pY/3m8eIz8pn6BpgsoTz+sr62Y430/f+Hy8zXF/5SOkZQPh5VuW7ak/DvefCnPHNr8H8D0C9PVT+ndEdCh38Fg72A0eQmjynZ0pa220Bt+kGGZTGeGuBejx7+jjFZJSgHgakr0Hkwcih41FPtvLkBPnQuz9TC8Nc/izSM42/TgCrM87epFYvUjteSOf6NPZJ+QWrKBgQUxVnhxVc3yq6sXrvi0FNoQHBgowqyJjsXxydf4UeDDGiHfjSzPYdjFN/L8mZhEgk5Rknz23LNiIkHypPd7RAq+BTS80O9lMo6YDELjfC4/TRP6aeDKF2nKEI7zVlXNCnznVf0qrEceRdubk3noLpoOFjwJA+JJmuOyBZJIqgi/BAvmugQ5DhJ0kaHra3TJn0GPK6chIFs53fF+fnXtpKgs/CN+RedXWGK6BrYs5kA+CBe+dsWLcA2EhngaRoCJuq5dbRh6PXpDdYaRDbBcJ0J77ak7wLaUgd/outu24wezKU80X5MVQaYVmRr0jHadLDTt32BDbojLos2VC5Z/2QtNrFkzO4bGzYHnYB9161wCVZhkLPKdAGGo/+eBCD7buco9sJpLWbmkraxZORm/A/KIoelTaJhO2JIJLxRhSl5EgMT7pPB1nJtzqberaVfWzsfhXV6O3oZv02Tt5O2qSzKW2gOmngUhfQAdp5ZsU0rolgbPwAuOlFcg8U7qmblWQgVRRWQfQau6JGrZ69D1QxTf3YHcftgGuRZz9BAaGfwChi/CAdU91HIFM0H8yuruuLrF5T/FCetZGO6PEEYwJecqiJkYHWE16tXbd7zp7kpoFYvlSyu2xJv5uZZjr0TJbu+kSTzXishjAVff5VEZzt1LAgciiJ9x9OMhMQMEGJtOYSC7HozeZ1vxurgd/6odt76OHluJ606o/i9nUAVyJqg3A+iUEbc3bV1t1Y/x+2/nYbV6PfBEiKGk+eZC68TwS71TLZy3YMXH2o2lcMCStji/qmrpLVIzLoXi8CVUNBlxx5N00xxJPY+uTMEF5Ihr0Svvw+UmHjPmFRW1C9JqGkQFjIoFISueUUTxQ0xwQKefxpBZMl3MrDPLH07FWG3Wfwaft3mSiJBLgMYK3JnzoEh86TFYAE3gUasg0+Jq+ErH4LPoX0T5lwEXvocriompsKfhrM9Ma+ID0g7QpTO7lZHwM14OyfguPrl8d0gTG7FkdDsqup3mO/ww5FmOZY2DXjYJleGDCxzLOnS21b9xZPSCoGc2NhZT41z7jxhasaCuMV2PINCCa4NilnMtBOnnZEbgC3MXO0qeXKhFyyn/zJlrDcUPn5TWNQdQaBwCfy2VpPTpF8feMx1fCyGByTHY2DUvbAio7tfmFiP/gvnVyyfoyn6Hh7TT8IG8r9jKeXz54opfp1YWtQvroYGega9a/iT+QejPt9xyYz3S1FeYdaeirHHKlrSaMwnNGYMRBr8rkr7j0DALTlzlMnLu3JvhVY9XQcObgAIuiGETFLwmT6HJj0SZ9VfYio+jIrrcAI3pCqS7Bw0r9GsYEQoqR3/DsHDgI8FINyM8LZmnBEmOnJX4YZu56P398ZtYJbSCEHOKyFu0ecSI43jEPpxevUbFaAPE2a4yzVu+31hs79MP2oO5LiYwsec6gPp8C9FdOEH/c5TzPhwCtODdzy8PJIf0ilM0KZ+UXDuKHja0oCAknGi0bObatY+u8yxk16AHwsD4Njah9cPPWlxe0M/eCVo/jiFyo4rJ7XV1Vb9CHXQxCG8JNPMKeK+q0+MmxxMf5jIyXBL7Cog2IRZLeMEAagQunK1g1+DzwWSL7YamtR32Js5wYMGTK/wCADOIYX6BmIVXH1gDjXYr6/hAw06aw9KFpFBQ/RAEVxsl5QvzG03omxctusqCUb+PlBnv8o63PJJQ8PJrMTv2JeMofpJXF8XATqYIuRq9SQM/Dy4teOvg+85BCG6/JMbUzMRMvIdbjRfRcxQ/lQmc5xz3zuGLkPY3yfSWYhW6ofUjXYICFrhHCV0bBWzfVZo4AFq/inKehyC/HbVp2546G46BZHafO40w6oAgLRDFzSfCJQMBIWWixVYshZSPw8ffvxkKhZbqRuhmfGzhP5C2dVhO5kveyXmM8GJJU1O7bRuoA1+Mym4CUP1JgiWUGnFpec3NYyEgaBP/KxqarMr3nhhu+AAw8CSI60Aqr7NMpArmzZvXhHqfb2mXb50USZiprmQA3XA8l38X8S7gcrN+Chg3w4uFelpywR3CNhhC+BkombOhk6yA7bsKf3+WdJN0AXVAYNidQgvxFSh8pNt4n9QEjt6RaUEXVUp2W6ZAFUMs7qF5zZsurBc8hbLeRo/zRmd8pvph0BcLFf9PSoic98GobszGzCRR6d4dAcXcn2s51BHQ1AuqFq46B7QQ3OY1MOrD6TDRXEh5ErS2cG91vPhWTXRExzioKe02jHbsSlIAaGrJRhzf0tpFctduQ+HrD+/b7Y7z3tfwex7CKLGG6sol2NjmAHBfqTSXfaK2tpyGnltIZc8lkORiNiEadoqz0mIPoydtJ5MsaKDK0NYQBPs7tl04Ej0HCkxiuStoGenSUTk0xaCvm7W18/Zgb601HvtSZmFC34KxIU5mBnl4iNtBGUvpiDm0ZwX22/2yhM1ct26db7cNG9EfIc1DGKazlu82GgwgPPDvFjOpkSnEQiJSiznmriDOCxoOqU0YCbZgfKtGmZ1ipLu5jIvvosccCCJEhJ1wk5aOKst0HT8abjtTbWkvgyztpPeEiwQsMUJlni6SDE2US04bHsWGtuq6xfNvpXetudH1dccJj4VGdSEk9wLILdbl1BAwCENBYs5KHRKoUAwV1L2hmrNt2IB16+6dDfd6l7KSALz3xJISM1HHt5C/H80T3rLdcsEAEB+73vjfkHej0NQGg0V2AKerJZBrirwaEMo5mBpO9pZB+elCh6AG0m8S/0+sP/9x6LCcpIVDGVYxdBaLRn9eV1t+rRev95lMDEPwlZgzzkMV7ebEZL10x6LCEeR7BkDu57a+cenSOe8i3hUi07y1JC4bz8Z8eiF61XlIdxqW8Ibqmo4hw5/WxGx3KJWSFu2fwOHhlXVLqjbj2Q2A4h/mmOaAIlZ0OtT/cTCxPwcpwiYlfgqoc3yCSIo00tfAyQcA7/dhrakBRM5JLZy/YPmZumBfgYXxVZR7MsrFWMFAAPU6WPEQyv2jYQx4yTSvb+fp9yKGzTkch2v/BbPnt8E6rO67tt4+MPcZLuVPm5ujf7nlFvMQ5amsXDaYG8Yk7EzyFtH6HIZQYk/N2+SybI30eVgLe3bPkEPnw6y8HtrzZ1FnfwgiLSO/jeTbQdT7pBbaVm/euMsne4eoeeaKYbrDPoYX00HnaWj/qWj7KaB3SYuAH8W7BqhOG6Sm/bnOvGlnaiH/B0tkChLTriTwAAAAAElFTkSuQmCC";

	let docHead = document.getElementsByTagName("head")[0],
	    newLink = document.createElement("link");

	newLink.rel = "shortcut icon";
	newLink.href = `data:image/png;base64,${bggStatsImage}`;
	docHead.appendChild(newLink);

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	/* jshint ignore:start */

	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-2726397-31', 'auto');
	ga('send', 'pageview');

	/* jshint ignore:end */

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Requires
	let hotness = __webpack_require__(6),
	    published = __webpack_require__(23),
	    rank = __webpack_require__(24),
	    top10 = __webpack_require__(25);

	module.exports = {
	  hotness,
	  published,
	  rank,
	  top10
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/*jshint loopfunc: true */

	let getData = __webpack_require__(7),
	    createChart = __webpack_require__(17),
	    arrayOfPromises = [],
	    data = {};

	let hotnessLogic = slot => {
	  getData.hotness.then( result => {                             // get hotness data
	    data = JSON.parse(result).slice(0,5);                       // push first five results to data.hotness
	    for (let i = 0; i < 5; i++) {                               // iterate over the top 5
	      let bggId = data[i].gameId;
	      let arrayItem = getData.details(bggId).then( result => {  // get more game details for each game
	      let massagedData = JSON.parse(result).items.item[0];
	      data[i].details = massagedData;                           // add a details key to to each game
	      }).catch(function(error) { console.log("Game Details API Call Error", error); });
	      arrayOfPromises.push(arrayItem);                          // push each promise to array
	    }
	    Promise.all([                                               // listen for when all promises resolve
	        arrayOfPromises[0],
	        arrayOfPromises[1],
	        arrayOfPromises[2],
	        arrayOfPromises[3],
	        arrayOfPromises[4]
	      ]).then(values => {
	      createChart.hotness("The Hotness", data, slot); // create chart after all API calls resolve
	    }, reason => {
	      console.log("hotness API calls didn't resolve", reason);
	    });

	  }).catch(function(error) { console.log("Data Hotness API Call Error", error); });
	};

	module.exports = hotnessLogic;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	    // BGG API Calls
	let details = __webpack_require__(8),
	    hotness = __webpack_require__(10),

	    // Crawler Data
	    ranks = __webpack_require__(11),
	    published = __webpack_require__(12),
	    top10 = __webpack_require__(13),

	    // Local Data
	    historic = __webpack_require__(15),

	    // Board Game Prices API Calls
	    price = __webpack_require__(16);

	module.exports = {
	  details,
	  hotness,
	  ranks,
	  published,
	  top10,
	  historic,
	  price
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	let getData = __webpack_require__(9);

	let gameDetails = function(id) {
	  return getData(`https://bgg-api.herokuapp.com/api/v1/thing?id=${id}`);
	};

	module.exports = gameDetails;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	function getData(url) {

	  return new Promise(function(resolve, reject) {
	    var req = new XMLHttpRequest();
	    req.open('GET', url);

	    req.onload = function() {
	      // This is called even on 404 etc
	      // so check the status
	      if (req.status == 200) {
	        // Resolve the promise with the response text
	        resolve(req.response);
	      }
	      else {
	        // Otherwise reject with the status text
	        // which will hopefully be a meaningful error
	        reject(Error(req.statusText));
	      }
	    };

	    // Handle network errors
	    req.onerror = function() {
	      reject(Error("Network Error"));
	    };

	    // Make the request
	    req.send();
	  });
	}

	module.exports = getData;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	let getData = __webpack_require__(9);
	let getHotness = getData('https://bgg-json.azurewebsites.net/hot');
	module.exports = getHotness;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// requires
	let getData = __webpack_require__(9),
	    getToday = __webpack_require__(14);

	// URL config
	let baseURL      = "https://bggstats-2de27.firebaseio.com/",
	    collection   = "GameRank",
	    tag          = "CrawlYMD",
	    today_       = getToday();

	// tagValue is a custom tag that lets me pull down using two queries
	// it's workaround since you can't use ?orderBy= twice in a firebase query

	let today = () => {
	  return getData(`${baseURL}${collection}.json?orderBy=%22${tag}%22&equalTo=%22${today_}%22`);
	};

	let compareDate = compareDate_ => {
	  return getData(`${baseURL}${collection}.json?orderBy=%22${tag}%22&equalTo=%22${compareDate_}%22`);
	};


	module.exports = {today, compareDate};

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// requires
	let getData = __webpack_require__(9),
	    getToday = __webpack_require__(14);

	// URL config
	let baseURL    = "https://bggstats-2de27.firebaseio.com/",
	    collection = "GameRank",
	    tag        = "Top10Tag",
	    today      = getToday(),
	    tagValue   = `${today}_Top10_true`;

	// tagValue is a custom tag that lets me pull down using two queries
	// it's workaround since you can't use ?orderBy= twice in a firebase query

	let getCrawlTop10 = () => {
	  return getData(`${baseURL}${collection}.json?orderBy=%22${tag}%22&equalTo=%22${tagValue}%22`);
	};

	module.exports = getCrawlTop10;

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	let getDate = function() {
	  Date.prototype.yyyymmdd = function() {
	    let mm = (this.getMonth() + 1).toString(); // getMonth() is zero-based
	    let dd = this.getDate().toString();
	    return [this.getFullYear(), mm.length===2 ? '' : '0', mm, dd.length===2 ? '' : '0', dd].join('');
	  };
	    let date = new Date();
	    return date.yyyymmdd();
	};

	module.exports = getDate;

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	 // chartData is an array of arrays. Example:

	          //    [
	          //      ['year', 'game1', 'game2'],
	          //      ['2015',       2,       6],
	          //      ['2016',       1,       7]
	          //    ]

	let historicData = [

	        // These titles are for building graph and what appears on hovers.
	        // HTML list loaded via chart-visuals/top10-chart.js

	  ['Year', 'Pandemic Legacy: Season 1',                     // 1
	           'Through the Ages: A New Story of Civilization', // 2
	           'Twilight Struggle',                             // 3
	           'Terra Mystica',                                 // 4
	           'Caverna: The Cave Farmers',                     // 5
	           'Star Wars: Rebellion',                          // 6
	           'Puerto Rico',                                   // 7
	           '7 Wonders Duel',                                // 8
	           'The Castles of Burgundy',                       // 9
	           'Agricola',                                     // 10

	           'Power Grid',                                   // 11
	           'Tigris & Euphrates',                           // 12
	           'Dominion',                                     // 13
	           'El Grande',                                    // 14
	           'Caylus',                                       // 15
	           'Race for the Galaxy',                          // 16
	           'Le Havre',                                     // 17
	           'Dominion: Intrigue',                           // 18
	           'Brass',                                        // 19
	           'Eclipse',                                      // 20
	           'Android: Netrunner',                           // 21
	           'Mage Knight Board Game',                       // 22
	           'Through the Ages: A Story of Civilization'     // 23
	  ],
	   //       1   2  3   4   5   6   7   8   9  10    11  12  13  14  15  16  17  18  19  20  21  22  23
	  ['2009', 11, 11, 4, 11, 11, 11,  2, 11, 11,  1,    3,  5,  6,  8,  9, 10, 11, 11, 11, 11, 11, 11,  7],
	  ['2010', 11, 11, 4, 11, 11, 11,  2, 11, 11,  1,    3,  8,  6,  9, 10, 11,  7, 11, 11, 11, 11, 11,  5],
	  ['2011', 11, 11, 1, 11, 11, 11,  2, 11, 11,  3,    5, 11,  8, 11, 10, 11,  6,  7,  9, 11, 11, 11,  4],
	  ['2012', 11, 11, 1, 11, 11, 11,  3, 11, 11,  2,    5, 11,  9, 11, 10, 11,  6,  8,  7, 11, 11, 11,  4],
	  ['2013', 11, 11, 1, 11, 11, 11,  4, 11, 11,  3,    6, 11, 11, 11, 11, 11,  7, 11, 10,  5,  8,  9,  2],
	  ['2014', 11, 11, 1,  6, 11, 11,  4, 11, 11,  3,    8, 11, 11, 11, 11, 11, 10, 11, 11,  7,  5,  9,  2],
	  ['2015', 11, 11, 1,  2,  6, 11,  5, 11, 11,  4,   10, 11, 11, 11, 11, 11, 11, 11, 11,  8,  7,  9,  3],
	  ['2016',  1,  2, 3,  4,  5,  6,  7, 11,  9, 10,   11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,  9, 11],
	  ['',      1,  2, 3,  4,  5,  6,  7,  8,  9, 10,   11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11]
	];

	module.exports = historicData;

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Requires
	let hotness = __webpack_require__(18),
	    published = __webpack_require__(20),
	    rank = __webpack_require__(21),
	    top10 = __webpack_require__(22);

	module.exports = {
	  hotness,
	  published,
	  rank,
	  top10
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	let $ = __webpack_require__(19);

	let hotnessChart = (title, data, slot) => {
	  // Setting up variables
	  let shelf = "", top5list = "", gameDetails1 = "", gameDetails2 = "", gameDetails3 = "";

	  /**********************\
	  |                      |
	  |  Info Box for Game 1
	  |                      |
	  \**********************/

	  // item 1 description
	  let truncateLength = 260,
	      item1Link = `https://boardgamegeek.com/boardgame/${data[0].gameId}`,
	      descriptionData = String(data[0].details.description).substring(0, truncateLength),
	      description = `<a href="${item1Link}">${descriptionData}...</a>`;

	  // item 1 html
	  top5list += `
	    <li><a href="${item1Link}/"><strong>About ${data[0].name}</strong</a></li>
	    <table class="table table-hover">
	      <tr>
	        <td><strong>${data[0].yearPublished}</strong> - ${description}</td>
	      </tr>
	    </table>
	  `;

	  /**********************\
	  |                      |
	  |  Table Data
	  |                      |
	  \**********************/

	  // titles in list form
	    gameDetails1 += `<ol>`;
	    for (let i = 0; i < data.length; i++) {
	      gameDetails1 += `
	         <li>
	          <a href="https://boardgamegeek.com/boardgame/${data[i].gameId}/">
	            ${data[i].name}
	          </a>
	        </li>
	      `;
	    }
	    gameDetails1 += `</ol>`;

	    // player count
	    for (let i = 0; i < data.length; i++) {
	      let playerCountMin = data[i].details.minplayers[0].$.value,
	          playerCountMax = data[i].details.maxplayers[0].$.value,
	          playerCount = `${playerCountMin}-${playerCountMax} players`;
	          gameDetails2 += `<td>${playerCount}</td>`;
	    }

	    // playing time
	    for (let i = 0; i < data.length; i++) {
	      let timeMin = data[i].details.minplaytime[0].$.value,
	          timeMax = data[i].details.maxplaytime[0].$.value,
	          time = `${timeMin}-${timeMax} minutes`;
	          gameDetails3 += `<td>${time}</td>`;
	    }

	  /**********************\
	  |                      |
	  |  Shelf Visuals
	  |                      |
	  \**********************/

	  shelf += `
	   <div class='row'>
	    <div class="col-sm-12 col-md-12 col-lg-3">
	      <div class="statbox">
	        <div class="label-title">
	          <h2>${title}</h2>
	          <a><img class="help pull-right" src="/images/icons/help.svg" alt="What is The Hotness Stat?"></a>
	        </div>
	          <ol>
	            ${top5list}
	          </ol>
	     </div>
	    </div>

	    <div class="col-sm-12 col-md-12 col-lg-9">
	      <div class="statbox">
	        <div class="shelf text-center">
	        `;

	        // loop over shelf images
	        for (let i = 0; i < data.length; i++) {
	          shelf += `
	            <div class="shelf-shadowed">
	              <a href="https://boardgamegeek.com/boardgame/${data[i].gameId}/">
	                <img class="shelf-img" alt="${data[i].name}" title="${data[i].name}" src="${data[i].thumbnail}">
	              </a>
	            </div>
	          `;
	        }

	        // wooden shelf
	        shelf += `
	          <div class="shelf-bottom">
	            <div class="shelf-left">
	              <div class="shelf-right"></div>
	            </div>
	          </div>

	          <table class="table shelf-table">
	            </thead>
	            <tbody>
	              <tr>${gameDetails1}</tr>
	              <tr>${gameDetails2}</tr>
	              <tr>${gameDetails3}</tr>
	            </tbody>
	          </table>

	        </div>
	      </div>
	    </div>

	      `;

	  $(`#${slot}`).html(shelf);

	};

	module.exports = hotnessChart;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.1.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-09-22T22:30Z
	 */
	( function( global, factory ) {

		"use strict";

		if ( typeof module === "object" && typeof module.exports === "object" ) {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};



		function DOMEval( code, doc ) {
			doc = doc || document;

			var script = doc.createElement( "script" );

			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module



	var
		version = "3.1.1",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {

			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}

			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&

				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {

			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;

			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},

		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true && ("form" in elem || "label" in elem);
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");

		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {

		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {

				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {

					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}

					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||

						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
							disabledAncestor( elem ) === disabled;
				}

				return elem.disabled === disabled;

			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}

			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID filter and find
		if ( support.getById ) {
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};

			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );

					if ( elem ) {

						// Verify the id attribute
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}

						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( (elem = elems[i++]) ) {
							node = elem.getAttributeNode("id");
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}

					return [];
				}
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";

				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;




	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}

		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}

		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}

		// Simple selector that can be filtered directly, removing non-Elements
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		// Complex selector, compare the two sets, removing non-Elements
		qualifier = jQuery.filter( qualifier, elements );
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}

		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the master Deferred
				master = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}

			return master.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function( error, stack ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};




	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList
			.then( fn )

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		if ( chainable ) {
			return elems;
		}

		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}

		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}

		if ( data === "false" ) {
			return false;
		}

		if ( data === "null" ) {
			return null;
		}

		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}

		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}

		return data;
	}

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};




	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;

		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );

		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );

		} else {
			ret = [];
		}

		if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}

		return ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;



	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			if ( delegateCount &&

				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&

				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function( event ) {
			var button = event.button;

			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				if ( button & 1 ) {
					return 1;
				}

				if ( button & 2 ) {
					return 3;
				}

				if ( button & 4 ) {
					return 2;
				}

				return 0;
			}

			return event.which;
		}
	}, jQuery.event.addProp );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var

		/* eslint-disable max-len */

		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

		/* eslint-enable */

		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i,
			val = 0;

		// If we already have the right measurement, avoid augmentation
		if ( extra === ( isBorderBox ? "border" : "content" ) ) {
			i = 4;

		// Otherwise initialize for horizontal or vertical properties
		} else {
			i = name === "width" ? 1 : 0;
		}

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* eslint-disable no-loop-func */

				anim.done( function() {

				/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;

		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];

				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,

				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}

					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}

					return -1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




		// Strip and collapse whitespace according to HTML spec
		// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}


	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnothtmlwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
						return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}

					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;

					if ( index < 0 ) {
						i = max;

					} else {
						i = one ? index : 0;
					}

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						/* eslint-disable no-cond-assign */

						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				if ( val == null ) {
					return null;
				}

				if ( jQuery.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}

				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win, rect, doc,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			rect = elem.getBoundingClientRect();

			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;

				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}

			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );

	jQuery.parseJSON = JSON.parse;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}




	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}





	return jQuery;
	} );


/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	let $ = __webpack_require__(19);

	let drawRankChart = (title, data, slot) => {

	  let snippets = `
	    <!-- Rank Chart  -->
	    <div class="row">
	      <div class="col-sm-12 col-md-12 col-lg-12">

	      <div class="statbox">

	        <div class="label-title">
	          <h2>${title}</h2>
	          <a><img class="help pull-right" src="/images/icons/help.svg" alt="What is The Biggest Movers Chart?"></a>
	        </div>

	            <!-- Movement Chart -->
	            <div class="col-lg-8">
	              <p>movement chart</p>
	            </div>

	            <!-- Details About Biggest Mover -->
	            <div class="col-lg-4">
	              <p>details about biggest mover</p>
	            </div>

	        </div>

	      </div>
	    </div>
	  `;

	  $(`#${slot}`).html(snippets);

	};

	module.exports = drawRankChart;




/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	let $ = __webpack_require__(19);

	let drawTop10List = (title, crawlerData, slot) => {

	  // build top 10 list
	  let top10html = "",
	      d = crawlerData;

	  // loop over array of objects
	  for (let i = 0; i < crawlerData.length; i++) {
	    top10html += `<li><a href="http://boardgamegeek.com/boardgame/${d[i].BggId}/">${d[i].Name}<a/></li>`;
	  }

	  let snippets = `
	    <div class="row">

	      <!-- Top 10  -->
	      <div class="col-sm-12 col-md-12 col-lg-12">
	      <div class="statbox">
	                      <div class="label-title">
	          <h2>${title}</h2>
	          <a><img class="help pull-right" src="/images/icons/help.svg" alt="What is The Top 10 Stat?"></a>
	        </div>

	            <div class="col-sm-12 col-md-7 col-lg-8">

	              <!-- Line Chart -->
	             <div id="top10"></div>

	            </div>

	            <!-- Table -->
	            <div class="col-sm-12 col-md-5 col-lg-4">
	              <ol class="color-list">

	                ${top10html}

	             </ol>
	            </div>

	          </div>
	      </div>
	    </div>

	  `;

	  $(`#${slot}`).html(snippets);

	};

	module.exports = drawTop10List;




/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	let $ = __webpack_require__(19),
	    chartLoader = __webpack_require__(26),
	    getData = __webpack_require__(7),
	    createChart = __webpack_require__(17);

	let rankLogic = slot => {

	  // compare back 30 days logic
	  let compareDate = 20161214;

	  // make two calls to the database to get two sets of rankings data
	  Promise.all([
	    getData.ranks.today(),
	    getData.ranks.compareDate(compareDate)
	  ]).then(values => {
	    // parse data
	    let data = {};
	    data.today = JSON.parse(values[0]);
	    data.compare = JSON.parse(values[1]);
	    console.log("data:", data);

	    ////// crunch the numbers so we know the biggest movers

	    // make new objects with flatter data
	    let today = {}, compare = {}, names = {}, year = {}, movement = [];

	    // push today's ids and ranks to new objects
	    for (let prop in data.today) {
	      let todayId = data.today[prop].BggId;
	      let todayRank = data.today[prop].Rank;
	      // add key "game":rank to today object
	      today[todayId] = todayRank;
	      // add key "game":bggId to ids object
	      names[todayId] = data.today[prop].Name;
	      // add key "game":year to year object
	      year[todayId] = data.today[prop].BggYear;
	    }

	    // push compare today's Ids and ranks to new objects
	    for (let prop in data.compare) {
	      let compareId = data.compare[prop].BggId;
	      let compareRank = data.compare[prop].Rank;
	      compare[compareId] = compareRank;
	    }

	    // delete names that the have same rank or fell off the list from today object
	    for (let prop in today) {
	      // console.log("prop:", prop);
	      let todayName = names[prop];
	      let todayRank = today[prop];
	      let todayBggId = prop;
	      let compareRank = compare[todayBggId];

	      // exclude games that fell off the top 1000
	      if (compareRank !== undefined) {
	        // if a game's rank has changed, track it
	        if (todayRank !== compareRank) {
	          // push change in movement to the movement array
	          let object = {};
	          object.name = todayName;
	          object.movement = compareRank - todayRank;
	          object.bgg = prop;
	          object.year = year[todayBggId];

	          movement.push(object);
	        }
	      }
	    }

	    ///// massage movement array

	    // sort movement array by movement
	    movement.sort(function (a, b) {
	      if (a.movement < b.movement) { return 1;  }
	      if (a.movement > b.movement) { return -1; }
	      return 0;
	    });

	    // pull top ten movements and bottom 5 movers
	    let top10 = movement.slice(0, 10);
	    let lastIndex = movement.length;
	    let bottom5 = movement.slice(lastIndex - 5, lastIndex);

	    // combine top 10 and bottom 5 into 1 array
	    let prettyArray = top10.concat(bottom5);
	    console.log("prettyArray:", prettyArray);


	    // return formatted data
	    return data;
	  }).then(function(data){
	    // now make a third call to get details of the biggest mover


	    //build chart with this data
	    createChart.rank("Biggest Movers", data, slot);

	});

	};

	module.exports = rankLogic;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	let $ = __webpack_require__(19),
	    chartLoader = __webpack_require__(26),
	    getData = __webpack_require__(7),
	    createChart = __webpack_require__(17);

	let top10Logic = slot => {

	  // pull top 10 data from database
	  getData.top10().then( databaseData => {
	    let parsedData = JSON.parse(databaseData); // parse JSON to a javascript Object

	      // convert data from unsorted object of objects to sorted array in object
	      let crawlerData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	        // iterate over object of object
	        for (let prop in parsedData) {

	          // check the rank (1 to 10)
	          let rank = parsedData[prop].Rank;

	          // whatever the rank, push the object to that index in the prettyData array
	          let index = crawlerData.indexOf(rank);
	            if (index !== -1) {
	                crawlerData[index] = parsedData[prop];
	            }
	        }

	      // /**********************\
	      // |                      |
	      // |  combine historic    |
	      // |  data with new data  |
	      // |                      |
	      // \**********************/

	      // /////  1. prep data

	      // let oldData = getData.historic,
	      //     newData = crawlerData,
	      //     _2016array = oldData[8];
	      // console.log("new data:", newData);

	      // // clear 2016 array
	      // _2016array = ["2016"];
	      // console.log("old data:", oldData);

	      // /////  2. check if games already with historic data
	      // /////     need to be updated to include 2016 data

	      // // iterate over names of games with historical data
	      // for (let i = 1; i < oldData[0].length; i++) {
	      //   // is this game name anywhere in the new data?
	      //   let targetGame = oldData[0][i];
	      //   // console.log("old data:", targetGame);

	      //   for (let i = 0; i < newData.length; i++) {
	      //     let checkGame = newData[i].Name;
	      //     // console.log("checkGame:", checkGame);

	      //     if (targetGame === checkGame) {
	      //       // if match, push current rank to 2016 array
	      //       // console.log("match between " + targetGame + " and " + checkGame);
	      //       _2016array.push(newData[i].Rank);
	      //     }
	      //   }
	      //   // if there's note already a number for the index, push 11 to 2016 array
	      //   if (!_2016array[i]) { _2016array.push(11); }
	      // }

	      // /////  3. add games without historical data to arrays

	      // // iterate over games without historical data
	      // for (let i = 0; i < newData.length; i++) {
	      //   let targetGame = newData[i].Name;
	      //   let oldNames = oldData[0];
	      //   // console.log("target Game in loop 2:", targetGame);

	      //   // if game isn't already in historical data
	      //   if (!oldNames.includes(targetGame)) {
	      //     console.log(targetGame + " needs to be added.");
	      //     console.log("targetGame:", targetGame);
	      //     // push new name to end of array 1
	      //     oldData[0].push(targetGame);
	      //     // push rank of 11 to the end of the other arrays
	      //     oldData[1].push(11);
	      //     oldData[2].push(11);
	      //     oldData[3].push(11);
	      //     oldData[4].push(11);
	      //     oldData[5].push(11);
	      //     oldData[6].push(11);
	      //     oldData[7].push(11);
	      //     // add current rank of that game to the end of 2016 array
	      //     oldData[8].push(newData[i].Rank);
	      //     // add current rank of that game to the end of last array
	      //     // oldData[9].push(newData[i].Rank);
	      //   }
	      // }

	      // // make array 9 a copy of array 8 execpt first index is "" not "2016"
	      // oldData[9] = Object.create(oldData[8]);
	      // oldData[9][0] = "";

	      // // TO DO: switch games 1-10 to correct order? or try just switching colors

	      // let allData = oldData;


	      // Create html for google chart to be injected into and build list of the game names
	      createChart.top10("Top 10", crawlerData, slot);

	      let // color scheme for line chart
	      n1  = "#26BB5D",
	      n2  = "#259E7C",
	      n3  = "#24819B",
	      n4  = "#2364BA",
	      n5  = "#2347D9",
	      n6  = "#503FC1",
	      n7  = "#7E37A9",
	      n8  = "#AB2F91",
	      n9  = "#D9277A",
	      n10 = "#D9274B",
	      x1  = "#ccc",
	      x2  = "#eee";

	      google.charts.load("current", {packages:["corechart"]});
	      google.charts.setOnLoadCallback(drawChart);

	      function drawChart() {

	        let chartData = google.visualization.arrayToDataTable (getData.historic);

	        let options = {
	          colors: [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, x1, x2, x1, x2, x1, x2, x1, x2, x1, x2, x1, x2, x1, x2, x1, x2, x1, x2, x1, x2, x1, x2],
	          legend: 'none',
	          curveType: 'function',
	          pointSize: 0,
	          lineWidth: 1.5,
	          chartArea: { width: "100%", height: "80%"},
	          vAxis:{
	           baselineColor: '#fff',
	           gridlineColor: '#fff',
	           textPosition: 'none',
	           direction: -1,
	           viewWindow: { min: 0, max: 11}
	          },
	          hAxis:{
	            gridlines: { color: '#f3f3f3', count: 8}
	          }
	        };

	        // display chart in id "top10"
	        let chart = new google.visualization.LineChart(document.getElementById('top10'));

	        // draw google chart
	        chart.draw(chartData, options);

	        // resize line chart if user changes width of page
	        let chart1 = "done";
	        $(window).resize(function() {
	          if(chart1=="done") {
	          chart1 = "waiting";
	        setTimeout( ()=> {
	          drawChart();chart1 = "done";
	        },500); // delay in milliseconds
	        }
	        });

	      }

	      // error if can't get top 10 data from database
	      }, error => {
	      console.log("Couldn't get top10 data from database:", error);
	    });

	};


	module.exports = top10Logic;

/***/ },
/* 26 */
/***/ function(module, exports) {

	/* jshint ignore:start */

	(function (){ var aa="\n//# sourceURL=",ba='<script type="text/javascript" src="',b="American Samoa",ca="Antigua and Barbuda",k="Bolivia",p="Bosna i Hercegovina",q="Botswana",da="British Virgin Islands",ea="Cayman Islands",fa="Christmas Island",ga="Falkland Islands",r="Ghana",ha="Guin\u00e9e \u00e9quatoriale",ia="Guyane fran\u00e7aise",t="Honduras",u="Indonesia",v="Itoophiyaa",ja="Kalaallit Nunaat",w="Kiribati",ka="LocaleNameConstants",la="Luxembourg",ma="Madagascar",na="Marshall Islands",x="Micronesia",oa="Moldova, Republica",
	pa="Nederlandse Antillen",qa="New Zealand",y="Nigeria",ra="Norfolk Island",sa="Northern Mariana Islands",ta="Nouvelle-Cal\u00e9donie",z="Papua New Guinea",ua="Paraguay",va="Philippines",wa="Polyn\u00e9sie fran\u00e7aise",xa="Puerto Rico",za="Rep\u00fablica Dominicana",A="Rwanda",Aa="Rywvaneth Unys",Ba="R\u00e9publique centrafricaine",Ca="R\u00e9publique d\u00e9mocratique du Congo",Da="Saint Kitts and Nevis",Ea="Saint Vincent and the Grenadines",Fa="Saint-Pierre-et-Miquelon",Ga="Serbia and Montenegro",
	Ha="Seychelles",Ia="Slovensk\u00e1 republika",Ja="Solomon Islands",B="South Africa",Ka="Svalbard og Jan Mayen",La="Swaziland",Ma="S\u00e3o Tom\u00e9 e Pr\u00edncipe",C="S\u00e9n\u00e9gal",Na="Tanzania",Oa="Timor Leste",E="Tokelau",Pa="Turks and Caicos Islands",F="Tuvalu",G="T\u00fcrkiye",Qa="U.S. Virgin Islands",Ra="United Kingdom",Sa="United States",Ta="United States Minor Outlying Islands",Ua="Unknown or Invalid Region",H="Vanuatu",Va="Wallis-et-Futuna",Wa="annotatedtimeline",I="array",J="browserchart",
	K="complete",L="corechart",M="dygraph",N="function",Xa="google.charts.load",O="imagechart",P="object",Ya="text/javascript",Q="ui",R="ui_base",S="webfontloader",Za="{css_prefix}/{cssFile}",$a="{prefix}",ab="{prefix}/{version}/third_party/{package}",bb="{version}",cb="\u010cesk\u00e1 republika",db="\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c",eb="\u041a\u044b\u0440\u0433\u044b\u0437\u0441\u0442\u0430\u043d",fb="\u043c\u043e\u043d\u0433\u043e\u043b\u044c\u0441\u043a\u0438\u0439",gb="\u0540\u0561\u0575\u0561\u057d\u057f\u0561\u0576\u056b \u0540\u0561\u0576\u0580\u0561\u057a\u0565\u057f\u0578\u0582\u0569\u056b\u0582\u0576",
	U="\u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646",hb="\u0627\u0644\u0627\u0645\u0627\u0631\u0627\u062a \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0645\u062a\u062d\u062f\u0629",ib="\u0627\u0644\u0635\u062d\u0631\u0627\u0621 \u0627\u0644\u063a\u0631\u0628\u064a\u0629",jb="\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629",kb="\u0627\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062d\u062f\u0629 \u0627\u0644\u0623\u0645\u0631\u064a\u0643\u064a\u0629",
	lb="\u062c\u0632\u0631 \u0627\u0644\u0642\u0645\u0631",V="\u067e\u0627\u06a9\u0633\u062a\u0627\u0646",W="\u092d\u093e\u0930\u0924",X="\u12a2\u1275\u12ee\u1335\u12eb",mb="\uc870\uc120 \ubbfc\uc8fc\uc8fc\uc758 \uc778\ubbfc \uacf5\ud654\uad6d";function Y(){return function(){}}var Z=Z||{};Z.global=this;Z.O=function(a){return void 0!==a};
	Z.xa=function(a,c,d){a=a.split(".");d=d||Z.global;a[0]in d||!d.execScript||d.execScript("var "+a[0]);for(var e;a.length&&(e=a.shift());)!a.length&&Z.O(c)?d[e]=c:d=d[e]?d[e]:d[e]={}};Z.De=function(a,c){Z.xa(a,c)};Z.G=!0;Z.Jd="en";Z.oa=!0;Z.gc=!1;Z.Qb=!Z.G;Z.Ya=!1;Z.Lf=function(a){if(Z.Ka())throw Error("goog.provide can not be used within a goog.module.");Z.gb(a)};Z.gb=function(a,c){Z.xa(a,c)};Z.qc=/^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
	Z.Oa=function(a){if(!Z.h(a)||!a||-1==a.search(Z.qc))throw Error("Invalid module identifier");if(!Z.Ka())throw Error("Module "+a+" has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
	if(Z.l.Pa)throw Error("goog.module may only be called once per module.");Z.l.Pa=a};Z.Oa.get=Y();Z.Oa.Ne=Y();Z.l=null;Z.Ka=function(){return null!=Z.l};Z.Oa.ua=function(){Z.l.ua=!0};Z.eg=function(a){if(Z.Qb)throw a=a||"",Error("Importing test-only code into non-debug environment"+(a?": "+a:"."));};Z.Je=Y();Z.Ea=function(a){a=a.split(".");for(var c=Z.global,d;d=a.shift();)if(Z.Nc(c[d]))c=c[d];else return null;return c};Z.Ye=function(a,c){c=c||Z.global;for(var d in a)c[d]=a[d]};
	Z.Pd=function(a,c,d,e){if(Z.Wa){var f;a=a.replace(/\\/g,"/");var g=Z.j;e&&"boolean"!==typeof e||(e=e?{module:"goog"}:{});for(var h=0;f=c[h];h++)g.T[f]=a,g.La[a]=e;for(e=0;c=d[e];e++)a in g.F||(g.F[a]={}),g.F[a][c]=!0}};Z.Eg=!1;Z.Gd=!0;Z.$c=function(a){Z.global.console&&Z.global.console.error(a)};Z.Zf=Y();Z.B="";Z.Gf=Y();Z.Od=function(){throw Error("unimplemented abstract method");};Z.Qd=function(a){a.Me=function(){if(a.ub)return a.ub;Z.G&&(Z.vb[Z.vb.length]=a);return a.ub=new a}};Z.vb=[];Z.Xb=!0;
	Z.ec=Z.G;Z.Zc={};Z.Wa=!1;Z.$a="detect";Z.mc="transpile.js";
	Z.Wa&&(Z.j={La:{},T:{},F:{},Ib:{},Va:{},X:{}},Z.sb=function(){var a=Z.global.document;return null!=a&&"write"in a},Z.Fc=function(){if(Z.O(Z.global.Mb))Z.B=Z.global.Mb;else if(Z.sb())for(var a=Z.global.document.getElementsByTagName("SCRIPT"),c=a.length-1;0<=c;--c){var d=a[c].src,e=d.lastIndexOf("?"),e=-1==e?d.length:e;if("base.js"==d.substr(e-7,7)){Z.B=d.substr(0,e-7);break}}},Z.Ga=function(a,c){(Z.global.Ad||Z.xd)(a,c)&&(Z.j.Va[a]=!0)},Z.Wb=!(Z.global.atob||!Z.global.document||!Z.global.document.all),
	Z.Lc=function(a,c,d){Z.Ga("",'goog.retrieveAndExec_("'+a+'", '+c+", "+d+");")},Z.Ra=[],Z.Gg=function(a,c){return Z.Xb&&Z.O(Z.global.JSON)?"goog.loadModule("+Z.global.JSON.stringify(c+aa+a+"\n")+");":'goog.loadModule(function(exports) {"use strict";'+c+"\n;return exports});\n//# sourceURL="+a+"\n"},Z.Yc=function(){var a=Z.Ra.length;if(0<a){var c=Z.Ra;Z.Ra=[];for(var d=0;d<a;d++)Z.Ab(c[d])}},Z.Af=function(a){Z.wb(a)&&Z.rc(a)&&Z.Ab(Z.B+Z.Fa(a))},Z.wb=function(a){var c=(a=Z.Fa(a))&&Z.j.La[a]||{};return a&&
	("goog"==c.module||Z.Bb(c.lang))?Z.B+a in Z.j.X:!1},Z.rc=function(a){if((a=Z.Fa(a))&&a in Z.j.F)for(var c in Z.j.F[a])if(!Z.Rc(c)&&!Z.wb(c))return!1;return!0},Z.Ab=function(a){if(a in Z.j.X){var c=Z.j.X[a];delete Z.j.X[a];Z.Kc(c)}},Z.zf=Y(),Z.wd=function(a){Z.global.document.write(ba+a+'">\x3c/script>')},Z.tc=function(a){var c=Z.global.document,d=c.createElement("script");d.type=Ya;d.src=a;d.defer=!1;d.async=!1;c.head.appendChild(d)},Z.xd=function(a,c){if(Z.sb()){var d=Z.global.document;if(!Z.Ya&&
	d.readyState==K){if(/\bdeps.js$/.test(a))return!1;throw Error('Cannot write "'+a+'" after document load');}void 0===c?Z.Wb?(c=" onreadystatechange='goog.onScriptLoad_(this, "+ ++Z.yb+")' ",d.write(ba+a+'"'+c+">\x3c/script>")):Z.Ya?Z.tc(a):Z.wd(a):d.write('<script type="text/javascript">'+c+"\x3c/script>");return!0}return!1},Z.Bb=function(a){if("always"==Z.$a)return!0;if("never"==Z.$a)return!1;if(!Z.M){Z.M={es5:!0,es6:!0,"es6-impl":!0};try{Z.M.es5=eval("[1,].length!=1"),eval('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()')&&
	(Z.M.es6=!1,Z.M["es6-impl"]=!1)}catch(c){}}return!!Z.M[a]},Z.M=null,Z.yb=0,Z.If=function(a,c){a.readyState==K&&Z.yb==c&&Z.Yc();return!0},Z.Hg=function(a){function c(a){if(!(a in f.Va||a in f.Ib)){f.Ib[a]=!0;if(a in f.F)for(var g in f.F[a])if(!Z.Rc(g))if(g in f.T)c(f.T[g]);else throw Error("Undefined nameToPath for "+g);a in e||(e[a]=!0,d.push(a))}}var d=[],e={},f=Z.j;c(a);for(a=0;a<d.length;a++){var g=d[a];Z.j.Va[g]=!0}var h=Z.l;Z.l=null;for(a=0;a<d.length;a++)if(g=d[a]){var l=f.La[g]||{},m=Z.Bb(l.lang);
	"goog"==l.module||m?Z.Lc(Z.B+g,"goog"==l.module,m):Z.Ga(Z.B+g)}else throw Z.l=h,Error("Undefined script input");Z.l=h},Z.Fa=function(a){return a in Z.j.T?Z.j.T[a]:null},Z.Fc(),Z.global.Bd||Z.Ga(Z.B+"deps.js"));
	Z.yf=function(a){var c=Z.l;try{Z.l={Pa:void 0,ua:!1};var d;if(Z.xb(a))d=a.call(void 0,{});else if(Z.h(a))d=Z.Wc.call(void 0,a);else throw Error("Invalid module definition");var e=Z.l.Pa;if(!Z.h(e)||!e)throw Error('Invalid module name "'+e+'"');Z.l.ua?Z.gb(e,d):Z.ec&&Object.seal&&Z.P(d)&&Object.seal(d);Z.Zc[e]=d}finally{Z.l=c}};Z.Wc=function(a){eval(a);return{}};Z.Df=function(a){a=a.split("/");for(var c=0;c<a.length;)"."==a[c]?a.splice(c,1):c&&".."==a[c]&&a[c-1]&&".."!=a[c-1]?a.splice(--c,2):c++;return a.join("/")};
	Z.Vc=function(a){if(Z.global.Ob)return Z.global.Ob(a);try{var c=new Z.global.XMLHttpRequest;c.open("get",a,!1);c.send();return 0==c.status||200==c.status?c.responseText:null}catch(d){return null}};Z.$f=Y();
	Z.zg=function(a,c){var d=Z.global.$jscomp;d||(Z.global.$jscomp=d={});var e=d.Fb;if(!e){var f=Z.B+Z.mc,g=Z.Vc(f);g&&(eval(g+aa+f),d=Z.global.$jscomp,e=d.Fb)}if(!e)var h=" requires transpilation but no transpiler was found.",h=h+' Please add "//javascript/closure:transpiler" as a data dependency to ensure it is included.',e=d.Fb=function(a,c){Z.$c(c+h);return a};return e(a,c)};
	Z.u=function(a){var c=typeof a;if(c==P)if(a){if(a instanceof Array)return I;if(a instanceof Object)return c;var d=Object.prototype.toString.call(a);if("[object Window]"==d)return P;if("[object Array]"==d||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return I;if("[object Function]"==d||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return N}else return"null";
	else if(c==N&&"undefined"==typeof a.call)return P;return c};Z.pf=function(a){return null===a};Z.Nc=function(a){return null!=a};Z.isArray=function(a){return Z.u(a)==I};Z.Ia=function(a){var c=Z.u(a);return c==I||c==P&&"number"==typeof a.length};Z.kf=function(a){return Z.P(a)&&typeof a.getFullYear==N};Z.h=function(a){return"string"==typeof a};Z.Mc=function(a){return"boolean"==typeof a};Z.Qc=function(a){return"number"==typeof a};Z.xb=function(a){return Z.u(a)==N};
	Z.P=function(a){var c=typeof a;return c==P&&null!=a||c==N};Z.qb=function(a){return a[Z.D]||(a[Z.D]=++Z.rd)};Z.Ze=function(a){return!!a[Z.D]};Z.hd=function(a){null!==a&&"removeAttribute"in a&&a.removeAttribute(Z.D);try{delete a[Z.D]}catch(c){}};Z.D="closure_uid_"+(1E9*Math.random()>>>0);Z.rd=0;Z.Le=Z.qb;Z.Wf=Z.hd;Z.yc=function(a){var c=Z.u(a);if(c==P||c==I){if(a.clone)return a.clone();var c=c==I?[]:{},d;for(d in a)c[d]=Z.yc(a[d]);return c}return a};Z.wc=function(a,c,d){return a.call.apply(a.bind,arguments)};
	Z.vc=function(a,c,d){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(d,e);return a.apply(c,d)}}return function(){return a.apply(c,arguments)}};Z.bind=function(a,c,d){Z.bind=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Z.wc:Z.vc;return Z.bind.apply(null,arguments)};
	Z.dd=function(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var c=d.slice();c.push.apply(c,arguments);return a.apply(this,c)}};Z.Bf=function(a,c){for(var d in c)a[d]=c[d]};Z.now=Z.oa&&Date.now||function(){return+new Date};
	Z.Kc=function(a){if(Z.global.execScript)Z.global.execScript(a,"JavaScript");else if(Z.global.eval){if(null==Z.Y)if(Z.global.eval("var _evalTest_ = 1;"),"undefined"!=typeof Z.global._evalTest_){try{delete Z.global._evalTest_}catch(e){}Z.Y=!0}else Z.Y=!1;if(Z.Y)Z.global.eval(a);else{var c=Z.global.document,d=c.createElement("SCRIPT");d.type=Ya;d.defer=!1;d.appendChild(c.createTextNode(a));c.body.appendChild(d);c.body.removeChild(d)}}else throw Error("goog.globalEval not available");};Z.Y=null;
	Z.Ke=function(a,c){function d(a){a=a.split("-");for(var c=[],d=0;d<a.length;d++)c.push(e(a[d]));return c.join("-")}function e(a){return Z.hb[a]||a}if("."==String(a).charAt(0))throw Error('className passed in goog.getCssName must not start with ".". You passed: '+a);var f;f=Z.hb?"BY_WHOLE"==Z.Bc?e:d:function(a){return a};a=c?a+"-"+f(c):f(a);return Z.global.Nb?Z.global.Nb(a):a};Z.ag=function(a,c){Z.hb=a;Z.Bc=c};
	Z.Qe=function(a,c){c&&(a=a.replace(/\{\$([^}]+)}/g,function(a,e){return null!=c&&e in c?c[e]:a}));return a};Z.Re=function(a){return a};Z.ya=function(a,c){Z.xa(a,c,void 0)};Z.He=function(a,c,d){a[c]=d};Z.Ha=function(a,c){function d(){}d.prototype=c.prototype;a.ma=c.prototype;a.prototype=new d;a.prototype.constructor=a;a.uc=function(a,d,g){for(var e=Array(arguments.length-2),f=2;f<arguments.length;f++)e[f-2]=arguments[f];return c.prototype[d].apply(a,e)}};
	Z.uc=function(a,c,d){var e=arguments.callee.caller;if(Z.gc||Z.G&&!e)throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");if(e.ma){for(var f=Array(arguments.length-1),g=1;g<arguments.length;g++)f[g-1]=arguments[g];return e.ma.constructor.apply(a,f)}f=Array(arguments.length-2);for(g=2;g<arguments.length;g++)f[g-2]=arguments[g];for(var g=!1,h=a.constructor;h;h=h.ma&&h.ma.constructor)if(h.prototype[c]===
	e)g=!0;else if(g)return h.prototype[c].apply(a,f);if(a[c]===e)return a.constructor.prototype[c].apply(a,f);throw Error("goog.base called from a method of one name to a method of a different name");};Z.scope=function(a){if(Z.Ka())throw Error("goog.scope is not supported within a goog.module.");a.call(Z.global)};
	Z.o=function(a,c){var d=c.constructor,e=c.md;d&&d!=Object.prototype.constructor||(d=function(){throw Error("cannot instantiate an interface (no constructor defined).");});d=Z.o.zc(d,a);a&&Z.Ha(d,a);delete c.constructor;delete c.md;Z.o.bb(d.prototype,c);null!=e&&(e instanceof Function?e(d):Z.o.bb(d,e));return d};Z.o.dc=Z.G;
	Z.o.zc=function(a,c){function d(){var c=a.apply(this,arguments)||this;c[Z.D]=c[Z.D];this.constructor===d&&e&&Object.seal instanceof Function&&Object.seal(c);return c}if(!Z.o.dc)return a;var e=!Z.o.Sc(c);return d};Z.o.Sc=function(a){return a&&a.prototype&&a.prototype[Z.nc]};Z.o.Za="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
	Z.o.bb=function(a,c){for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d]);for(var e=0;e<Z.o.Za.length;e++)d=Z.o.Za[e],Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])};Z.qg=Y();Z.nc="goog_defineClass_legacy_unsealable";Z.debug={};Z.debug.Error=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Z.debug.Error);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a))};Z.Ha(Z.debug.Error,Error);Z.debug.Error.prototype.name="CustomError";Z.ib={};Z.ib.bc={Rb:1,yd:2,Nd:3,zd:4,Id:5,Hd:6,Md:7,Cd:8,DOCUMENT:9,Fd:10,Ed:11,Kd:12};Z.b={};Z.b.Xa=!1;Z.b.Tb=!1;Z.b.pc={$b:"\u00a0"};Z.b.startsWith=function(a,c){return 0==a.lastIndexOf(c,0)};Z.b.endsWith=function(a,c){var d=a.length-c.length;return 0<=d&&a.indexOf(c,d)==d};Z.b.re=function(a,c){return 0==Z.b.fb(c,a.substr(0,c.length))};Z.b.pe=function(a,c){return 0==Z.b.fb(c,a.substr(a.length-c.length,c.length))};Z.b.qe=function(a,c){return a.toLowerCase()==c.toLowerCase()};
	Z.b.od=function(a,c){for(var d=a.split("%s"),e="",f=Array.prototype.slice.call(arguments,1);f.length&&1<d.length;)e+=d.shift()+f.shift();return e+d.join("%s")};Z.b.we=function(a){return a.replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")};Z.b.Ja=function(a){return/^[\s\xa0]*$/.test(a)};Z.b.mf=function(a){return 0==a.length};Z.b.Oc=Z.b.Ja;Z.b.Pc=function(a){return Z.b.Ja(Z.b.ad(a))};Z.b.lf=Z.b.Pc;Z.b.jf=function(a){return!/[^\t\n\r ]/.test(a)};Z.b.gf=function(a){return!/[^a-zA-Z]/.test(a)};
	Z.b.qf=function(a){return!/[^0-9]/.test(a)};Z.b.hf=function(a){return!/[^a-zA-Z0-9]/.test(a)};Z.b.tf=function(a){return" "==a};Z.b.uf=function(a){return 1==a.length&&" "<=a&&"~">=a||"\u0080"<=a&&"\ufffd">=a};Z.b.og=function(a){return a.replace(/(\r\n|\r|\n)+/g," ")};Z.b.le=function(a){return a.replace(/(\r\n|\r|\n)/g,"\n")};Z.b.Ff=function(a){return a.replace(/\xa0|\s/g," ")};Z.b.Ef=function(a){return a.replace(/\xa0|[ \t]+/g," ")};
	Z.b.ue=function(a){return a.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")};Z.b.trim=Z.oa&&String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};Z.b.trimLeft=function(a){return a.replace(/^[\s\xa0]+/,"")};Z.b.trimRight=function(a){return a.replace(/[\s\xa0]+$/,"")};Z.b.fb=function(a,c){a=String(a).toLowerCase();c=String(c).toLowerCase();return a<c?-1:a==c?0:1};
	Z.b.Db=function(a,c,d){if(a==c)return 0;if(!a)return-1;if(!c)return 1;for(var e=a.toLowerCase().match(d),f=c.toLowerCase().match(d),g=Math.min(e.length,f.length),h=0;h<g;h++){d=e[h];var l=f[h];if(d!=l)return a=parseInt(d,10),!isNaN(a)&&(c=parseInt(l,10),!isNaN(c)&&a-c)?a-c:d<l?-1:1}return e.length!=f.length?e.length-f.length:a<c?-1:1};Z.b.df=function(a,c){return Z.b.Db(a,c,/\d+|\D+/g)};Z.b.Ic=function(a,c){return Z.b.Db(a,c,/\d+|\.\d+|\D+/g)};Z.b.Hf=Z.b.Ic;Z.b.Dg=function(a){return encodeURIComponent(String(a))};
	Z.b.Cg=function(a){return decodeURIComponent(a.replace(/\+/g," "))};Z.b.bd=function(a,c){return a.replace(/(\r\n|\r|\n)/g,c?"<br />":"<br>")};
	Z.b.rb=function(a){if(!Z.b.Kb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Z.b.Lb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Z.b.Zb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Z.b.Ub,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Z.b.cc,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Z.b.fc,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Z.b.ac,"&#0;"));Z.b.Xa&&-1!=a.indexOf("e")&&(a=a.replace(Z.b.Sb,"&#101;"));return a};Z.b.Lb=/&/g;Z.b.Zb=/</g;Z.b.Ub=/>/g;Z.b.cc=/"/g;Z.b.fc=/'/g;Z.b.ac=/\x00/g;Z.b.Sb=/e/g;
	Z.b.Kb=Z.b.Xa?/[\x00&<>"'e]/:/[\x00&<>"']/;Z.b.Gb=function(a){return Z.b.contains(a,"&")?!Z.b.Tb&&"document"in Z.global?Z.b.Hb(a):Z.b.td(a):a};Z.b.Bg=function(a,c){return Z.b.contains(a,"&")?Z.b.Hb(a,c):a};
	Z.b.Hb=function(a,c){var d={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},e;e=c?c.createElement("div"):Z.global.document.createElement("div");return a.replace(Z.b.Vb,function(a,c){var f=d[a];if(f)return f;"#"==c.charAt(0)&&(c=Number("0"+c.substr(1)),isNaN(c)||(f=String.fromCharCode(c)));f||(e.innerHTML=a+" ",f=e.firstChild.nodeValue.slice(0,-1));return d[a]=f})};
	Z.b.td=function(a){return a.replace(/&([^;]+);/g,function(a,d){switch(d){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:return"#"!=d.charAt(0)||(d=Number("0"+d.substr(1)),isNaN(d))?a:String.fromCharCode(d)}})};Z.b.Vb=/&([^;\s<&]+);?/g;Z.b.Fg=function(a,c){return Z.b.bd(a.replace(/  /g," &#160;"),c)};Z.b.Kf=function(a){return a.replace(/(^|[\n ]) /g,"$1"+Z.b.pc.$b)};
	Z.b.pg=function(a,c){for(var d=c.length,e=0;e<d;e++){var f=1==d?c:c.charAt(e);if(a.charAt(0)==f&&a.charAt(a.length-1)==f)return a.substring(1,a.length-1)}return a};Z.b.truncate=function(a,c,d){d&&(a=Z.b.Gb(a));a.length>c&&(a=a.substring(0,c-3)+"...");d&&(a=Z.b.rb(a));return a};Z.b.Ag=function(a,c,d,e){d&&(a=Z.b.Gb(a));e&&a.length>c?(e>c&&(e=c),a=a.substring(0,c-e)+"..."+a.substring(a.length-e)):a.length>c&&(e=Math.floor(c/2),a=a.substring(0,e+c%2)+"..."+a.substring(a.length-e));d&&(a=Z.b.rb(a));return a};
	Z.b.Ua={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"};Z.b.$={"'":"\\'"};Z.b.quote=function(a){a=String(a);for(var c=['"'],d=0;d<a.length;d++){var e=a.charAt(d),f=e.charCodeAt(0);c[d+1]=Z.b.Ua[e]||(31<f&&127>f?e:Z.b.jb(e))}c.push('"');return c.join("")};Z.b.Ge=function(a){for(var c=[],d=0;d<a.length;d++)c[d]=Z.b.jb(a.charAt(d));return c.join("")};
	Z.b.jb=function(a){if(a in Z.b.$)return Z.b.$[a];if(a in Z.b.Ua)return Z.b.$[a]=Z.b.Ua[a];var c,d=a.charCodeAt(0);if(31<d&&127>d)c=a;else{if(256>d){if(c="\\x",16>d||256<d)c+="0"}else c="\\u",4096>d&&(c+="0");c+=d.toString(16).toUpperCase()}return Z.b.$[a]=c};Z.b.contains=function(a,c){return-1!=a.indexOf(c)};Z.b.oe=function(a,c){return Z.b.contains(a.toLowerCase(),c.toLowerCase())};Z.b.Be=function(a,c){return a&&c?a.split(c).length-1:0};
	Z.b.L=function(a,c,d){var e=a;0<=c&&c<a.length&&0<d&&(e=a.substr(0,c)+a.substr(c+d,a.length-c-d));return e};Z.b.remove=function(a,c){c=new RegExp(Z.b.Sa(c),"");return a.replace(c,"")};Z.b.Tf=function(a,c){c=new RegExp(Z.b.Sa(c),"g");return a.replace(c,"")};Z.b.Sa=function(a){return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")};Z.b.repeat=String.prototype.repeat?function(a,c){return a.repeat(c)}:function(a,c){return Array(c+1).join(a)};
	Z.b.Jf=function(a,c,d){a=Z.O(d)?a.toFixed(d):String(a);d=a.indexOf(".");-1==d&&(d=a.length);return Z.b.repeat("0",Math.max(0,c-d))+a};Z.b.ad=function(a){return null==a?"":String(a)};Z.b.ke=function(a){return Array.prototype.join.call(arguments,"")};Z.b.Ue=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Z.now()).toString(36)};
	Z.b.ye=function(a,c){var d=0;a=Z.b.trim(String(a)).split(".");c=Z.b.trim(String(c)).split(".");for(var e=Math.max(a.length,c.length),f=0;0==d&&f<e;f++){var g=a[f]||"",h=c[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;d=Z.b.qa(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||Z.b.qa(0==g[2].length,0==h[2].length)||Z.b.qa(g[2],h[2]);g=g[3];h=h[3]}while(0==d)}return d};
	Z.b.qa=function(a,c){return a<c?-1:a>c?1:0};Z.b.$e=function(a){for(var c=0,d=0;d<a.length;++d)c=31*c+a.charCodeAt(d)>>>0;return c};Z.b.ud=2147483648*Math.random()|0;Z.b.Ce=function(){return"goog_"+Z.b.ud++};Z.b.vg=function(a){var c=Number(a);return 0==c&&Z.b.Ja(a)?NaN:c};Z.b.nf=function(a){return/^[a-z]+([A-Z][a-z]*)*$/.test(a)};Z.b.vf=function(a){return/^([A-Z][a-z]*)+$/.test(a)};Z.b.rg=function(a){return String(a).replace(/\-([a-z])/g,function(a,d){return d.toUpperCase()})};
	Z.b.xg=function(a){return String(a).replace(/([A-Z])/g,"-$1").toLowerCase()};Z.b.yg=function(a,c){c=Z.h(c)?Z.b.Sa(c):"\\s";return a.replace(new RegExp("(^"+(c?"|["+c+"]+":"")+")([a-z])","g"),function(a,c,f){return c+f.toUpperCase()})};Z.b.me=function(a){return String(a.charAt(0)).toUpperCase()+String(a.substr(1)).toLowerCase()};Z.b.parseInt=function(a){isFinite(a)&&(a=String(a));return Z.h(a)?/^\s*-?0x/i.test(a)?parseInt(a,16):parseInt(a,10):NaN};
	Z.b.hg=function(a,c,d){a=a.split(c);for(var e=[];0<d&&a.length;)e.push(a.shift()),d--;a.length&&e.push(a.join(c));return e};Z.b.xf=function(a,c){if(c)"string"==typeof c&&(c=[c]);else return a;for(var d=-1,e=0;e<c.length;e++)if(""!=c[e]){var f=a.lastIndexOf(c[e]);f>d&&(d=f)}return-1==d?a:a.slice(d+1)};
	Z.b.Ee=function(a,c){var d=[],e=[];if(a==c)return 0;if(!a.length||!c.length)return Math.max(a.length,c.length);for(var f=0;f<c.length+1;f++)d[f]=f;for(f=0;f<a.length;f++){e[0]=f+1;for(var g=0;g<c.length;g++)e[g+1]=Math.min(e[g]+1,d[g+1]+1,d[g]+Number(a[f]!=c[g]));for(g=0;g<d.length;g++)d[g]=e[g]}return e[c.length]};Z.g={};Z.g.s=Z.G;Z.g.V=function(a,c){c.unshift(a);Z.debug.Error.call(this,Z.b.od.apply(null,c));c.shift()};Z.Ha(Z.g.V,Z.debug.Error);Z.g.V.prototype.name="AssertionError";Z.g.Pb=function(a){throw a;};Z.g.va=Z.g.Pb;Z.g.A=function(a,c,d,e){var f="Assertion failed";if(d)var f=f+(": "+d),g=e;else a&&(f+=": "+a,g=c);a=new Z.g.V(""+f,g||[]);Z.g.va(a)};Z.g.cg=function(a){Z.g.s&&(Z.g.va=a)};Z.g.assert=function(a,c,d){Z.g.s&&!a&&Z.g.A("",null,c,Array.prototype.slice.call(arguments,2));return a};
	Z.g.Aa=function(a,c){Z.g.s&&Z.g.va(new Z.g.V("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1)))};Z.g.Wd=function(a,c,d){Z.g.s&&!Z.Qc(a)&&Z.g.A("Expected number but got %s: %s.",[Z.u(a),a],c,Array.prototype.slice.call(arguments,2));return a};Z.g.Zd=function(a,c,d){Z.g.s&&!Z.h(a)&&Z.g.A("Expected string but got %s: %s.",[Z.u(a),a],c,Array.prototype.slice.call(arguments,2));return a};
	Z.g.Ud=function(a,c,d){Z.g.s&&!Z.xb(a)&&Z.g.A("Expected function but got %s: %s.",[Z.u(a),a],c,Array.prototype.slice.call(arguments,2));return a};Z.g.Xd=function(a,c,d){Z.g.s&&!Z.P(a)&&Z.g.A("Expected object but got %s: %s.",[Z.u(a),a],c,Array.prototype.slice.call(arguments,2));return a};Z.g.Rd=function(a,c,d){Z.g.s&&!Z.isArray(a)&&Z.g.A("Expected array but got %s: %s.",[Z.u(a),a],c,Array.prototype.slice.call(arguments,2));return a};
	Z.g.Sd=function(a,c,d){Z.g.s&&!Z.Mc(a)&&Z.g.A("Expected boolean but got %s: %s.",[Z.u(a),a],c,Array.prototype.slice.call(arguments,2));return a};Z.g.Td=function(a,c,d){!Z.g.s||Z.P(a)&&a.nodeType==Z.ib.bc.Rb||Z.g.A("Expected Element but got %s: %s.",[Z.u(a),a],c,Array.prototype.slice.call(arguments,2));return a};Z.g.Vd=function(a,c,d,e){!Z.g.s||a instanceof c||Z.g.A("Expected instanceof %s but got %s.",[Z.g.pb(c),Z.g.pb(a)],d,Array.prototype.slice.call(arguments,3));return a};
	Z.g.Yd=function(){for(var a in Object.prototype)Z.g.Aa(a+" should not be enumerable in Object.prototype.")};Z.g.pb=function(a){return a instanceof Function?a.displayName||a.name||"unknown type name":a instanceof Object?a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a):null===a?"null":typeof a};Z.f={};Z.w=Z.oa;Z.f.v=!1;Z.f.ed=function(a){return a[a.length-1]};Z.f.wf=Z.f.ed;Z.f.indexOf=Z.w&&(Z.f.v||Array.prototype.indexOf)?function(a,c,d){return Array.prototype.indexOf.call(a,c,d)}:function(a,c,d){d=null==d?0:0>d?Math.max(0,a.length+d):d;if(Z.h(a))return Z.h(c)&&1==c.length?a.indexOf(c,d):-1;for(;d<a.length;d++)if(d in a&&a[d]===c)return d;return-1};
	Z.f.lastIndexOf=Z.w&&(Z.f.v||Array.prototype.lastIndexOf)?function(a,c,d){return Array.prototype.lastIndexOf.call(a,c,null==d?a.length-1:d)}:function(a,c,d){d=null==d?a.length-1:d;0>d&&(d=Math.max(0,a.length+d));if(Z.h(a))return Z.h(c)&&1==c.length?a.lastIndexOf(c,d):-1;for(;0<=d;d--)if(d in a&&a[d]===c)return d;return-1};
	Z.f.forEach=Z.w&&(Z.f.v||Array.prototype.forEach)?function(a,c,d){Array.prototype.forEach.call(a,c,d)}:function(a,c,d){for(var e=a.length,f=Z.h(a)?a.split(""):a,g=0;g<e;g++)g in f&&c.call(d,f[g],g,a)};Z.f.kb=function(a,c){for(var d=Z.h(a)?a.split(""):a,e=a.length-1;0<=e;--e)e in d&&c.call(void 0,d[e],e,a)};
	Z.f.filter=Z.w&&(Z.f.v||Array.prototype.filter)?function(a,c,d){return Array.prototype.filter.call(a,c,d)}:function(a,c,d){for(var e=a.length,f=[],g=0,h=Z.h(a)?a.split(""):a,l=0;l<e;l++)if(l in h){var m=h[l];c.call(d,m,l,a)&&(f[g++]=m)}return f};Z.f.map=Z.w&&(Z.f.v||Array.prototype.map)?function(a,c,d){return Array.prototype.map.call(a,c,d)}:function(a,c,d){for(var e=a.length,f=Array(e),g=Z.h(a)?a.split(""):a,h=0;h<e;h++)h in g&&(f[h]=c.call(d,g[h],h,a));return f};
	Z.f.reduce=Z.w&&(Z.f.v||Array.prototype.reduce)?function(a,c,d,e){e&&(c=Z.bind(c,e));return Array.prototype.reduce.call(a,c,d)}:function(a,c,d,e){var f=d;Z.f.forEach(a,function(d,h){f=c.call(e,f,d,h,a)});return f};Z.f.reduceRight=Z.w&&(Z.f.v||Array.prototype.reduceRight)?function(a,c,d,e){e&&(c=Z.bind(c,e));return Array.prototype.reduceRight.call(a,c,d)}:function(a,c,d,e){var f=d;Z.f.kb(a,function(d,h){f=c.call(e,f,d,h,a)});return f};
	Z.f.some=Z.w&&(Z.f.v||Array.prototype.some)?function(a,c,d){return Array.prototype.some.call(a,c,d)}:function(a,c,d){for(var e=a.length,f=Z.h(a)?a.split(""):a,g=0;g<e;g++)if(g in f&&c.call(d,f[g],g,a))return!0;return!1};Z.f.every=Z.w&&(Z.f.v||Array.prototype.every)?function(a,c,d){return Array.prototype.every.call(a,c,d)}:function(a,c,d){for(var e=a.length,f=Z.h(a)?a.split(""):a,g=0;g<e;g++)if(g in f&&!c.call(d,f[g],g,a))return!1;return!0};
	Z.f.count=function(a,c,d){var e=0;Z.f.forEach(a,function(a,g,h){c.call(d,a,g,h)&&++e},d);return e};Z.f.find=function(a,c,d){c=Z.f.findIndex(a,c,d);return 0>c?null:Z.h(a)?a.charAt(c):a[c]};Z.f.findIndex=function(a,c,d){for(var e=a.length,f=Z.h(a)?a.split(""):a,g=0;g<e;g++)if(g in f&&c.call(d,f[g],g,a))return g;return-1};Z.f.Ie=function(a,c,d){c=Z.f.Gc(a,c,d);return 0>c?null:Z.h(a)?a.charAt(c):a[c]};
	Z.f.Gc=function(a,c,d){for(var e=Z.h(a)?a.split(""):a,f=a.length-1;0<=f;f--)if(f in e&&c.call(d,e[f],f,a))return f;return-1};Z.f.contains=function(a,c){return 0<=Z.f.indexOf(a,c)};Z.f.Oc=function(a){return 0==a.length};Z.f.clear=function(a){if(!Z.isArray(a))for(var c=a.length-1;0<=c;c--)delete a[c];a.length=0};Z.f.bf=function(a,c){Z.f.contains(a,c)||a.push(c)};Z.f.tb=function(a,c,d){Z.f.splice(a,d,0,c)};Z.f.cf=function(a,c,d){Z.dd(Z.f.splice,a,d,0).apply(null,c)};
	Z.f.insertBefore=function(a,c,d){var e;2==arguments.length||0>(e=Z.f.indexOf(a,d))?a.push(c):Z.f.tb(a,c,e)};Z.f.remove=function(a,c){c=Z.f.indexOf(a,c);var d;(d=0<=c)&&Z.f.L(a,c);return d};Z.f.Yf=function(a,c){c=Z.f.lastIndexOf(a,c);return 0<=c?(Z.f.L(a,c),!0):!1};Z.f.L=function(a,c){return 1==Array.prototype.splice.call(a,c,1).length};Z.f.Xf=function(a,c,d){c=Z.f.findIndex(a,c,d);return 0<=c?(Z.f.L(a,c),!0):!1};
	Z.f.Uf=function(a,c,d){var e=0;Z.f.kb(a,function(f,g){c.call(d,f,g,a)&&Z.f.L(a,g)&&e++});return e};Z.f.concat=function(a){return Array.prototype.concat.apply(Array.prototype,arguments)};Z.f.join=function(a){return Array.prototype.concat.apply(Array.prototype,arguments)};Z.f.qd=function(a){var c=a.length;if(0<c){for(var d=Array(c),e=0;e<c;e++)d[e]=a[e];return d}return[]};Z.f.clone=Z.f.qd;
	Z.f.extend=function(a,c){for(var d=1;d<arguments.length;d++){var e=arguments[d];if(Z.Ia(e)){var f=a.length||0,g=e.length||0;a.length=f+g;for(var h=0;h<g;h++)a[f+h]=e[h]}else a.push(e)}};Z.f.splice=function(a,c,d,e){return Array.prototype.splice.apply(a,Z.f.slice(arguments,1))};Z.f.slice=function(a,c,d){return 2>=arguments.length?Array.prototype.slice.call(a,c):Array.prototype.slice.call(a,c,d)};
	Z.f.Vf=function(a,c,d){function e(a){return Z.P(a)?"o"+Z.qb(a):(typeof a).charAt(0)+a}c=c||a;d=d||e;for(var f={},g=0,h=0;h<a.length;){var l=a[h++],m=d(l);Object.prototype.hasOwnProperty.call(f,m)||(f[m]=!0,c[g++]=l)}c.length=g};Z.f.cb=function(a,c,d){return Z.f.eb(a,d||Z.f.C,!1,c)};Z.f.ge=function(a,c,d){return Z.f.eb(a,c,!0,void 0,d)};Z.f.eb=function(a,c,d,e,f){for(var g=0,h=a.length,l;g<h;){var m=g+h>>1,n;n=d?c.call(f,a[m],m,a):c(e,a[m]);0<n?g=m+1:(h=m,l=!n)}return l?g:~g};
	Z.f.sort=function(a,c){a.sort(c||Z.f.C)};Z.f.jg=function(a,c){for(var d=Array(a.length),e=0;e<a.length;e++)d[e]={index:e,value:a[e]};var f=c||Z.f.C;Z.f.sort(d,function(a,c){return f(a.value,c.value)||a.index-c.index});for(e=0;e<a.length;e++)a[e]=d[e].value};Z.f.ld=function(a,c,d){var e=d||Z.f.C;Z.f.sort(a,function(a,d){return e(c(a),c(d))})};Z.f.gg=function(a,c,d){Z.f.ld(a,function(a){return a[c]},d)};
	Z.f.sf=function(a,c,d){c=c||Z.f.C;for(var e=1;e<a.length;e++){var f=c(a[e-1],a[e]);if(0<f||0==f&&d)return!1}return!0};Z.f.Fe=function(a,c,d){if(!Z.Ia(a)||!Z.Ia(c)||a.length!=c.length)return!1;var e=a.length;d=d||Z.f.Cc;for(var f=0;f<e;f++)if(!d(a[f],c[f]))return!1;return!0};Z.f.xe=function(a,c,d){d=d||Z.f.C;for(var e=Math.min(a.length,c.length),f=0;f<e;f++){var g=d(a[f],c[f]);if(0!=g)return g}return Z.f.C(a.length,c.length)};Z.f.C=function(a,c){return a>c?1:a<c?-1:0};
	Z.f.ef=function(a,c){return-Z.f.C(a,c)};Z.f.Cc=function(a,c){return a===c};Z.f.$d=function(a,c,d){d=Z.f.cb(a,c,d);return 0>d?(Z.f.tb(a,c,-(d+1)),!0):!1};Z.f.fe=function(a,c,d){c=Z.f.cb(a,c,d);return 0<=c?Z.f.L(a,c):!1};Z.f.je=function(a,c,d){for(var e={},f=0;f<a.length;f++){var g=a[f],h=c.call(d,g,f,a);Z.O(h)&&(e[h]||(e[h]=[])).push(g)}return e};Z.f.wg=function(a,c,d){var e={};Z.f.forEach(a,function(f,g){e[c.call(d,f,g,a)]=f});return e};
	Z.f.Mf=function(a,c,d){var e=[],f=0,g=a;d=d||1;void 0!==c&&(f=a,g=c);if(0>d*(g-f))return[];if(0<d)for(a=f;a<g;a+=d)e.push(a);else for(a=f;a>g;a+=d)e.push(a);return e};Z.f.repeat=function(a,c){for(var d=[],e=0;e<c;e++)d[e]=a;return d};Z.f.Hc=function(a){for(var c=[],d=0;d<arguments.length;d++){var e=arguments[d];if(Z.isArray(e))for(var f=0;f<e.length;f+=8192)for(var g=Z.f.Hc.apply(null,Z.f.slice(e,f,f+8192)),h=0;h<g.length;h++)c.push(g[h]);else c.push(e)}return c};
	Z.f.rotate=function(a,c){a.length&&(c%=a.length,0<c?Array.prototype.unshift.apply(a,a.splice(-c,c)):0>c&&Array.prototype.push.apply(a,a.splice(0,-c)));return a};Z.f.Cf=function(a,c,d){c=Array.prototype.splice.call(a,c,1);Array.prototype.splice.call(a,d,0,c[0])};
	Z.f.Ig=function(a){if(!arguments.length)return[];for(var c=[],d=arguments[0].length,e=1;e<arguments.length;e++)arguments[e].length<d&&(d=arguments[e].length);for(e=0;e<d;e++){for(var f=[],g=0;g<arguments.length;g++)f.push(arguments[g][e]);c.push(f)}return c};Z.f.fg=function(a,c){c=c||Math.random;for(var d=a.length-1;0<d;d--){var e=Math.floor(c()*(d+1)),f=a[d];a[d]=a[e];a[e]=f}};Z.f.Ae=function(a,c){var d=[];Z.f.forEach(c,function(c){d.push(a[c])});return d};
	Z.f.ze=function(a,c,d){return Z.f.concat.apply([],Z.f.map(a,c,d))};Z.locale={};
	Z.locale.J={COUNTRY:{AD:"Andorra",AE:hb,AF:U,AG:ca,AI:"Anguilla",AL:"Shqip\u00ebria",AM:gb,AN:pa,AO:"Angola",AQ:"Antarctica",AR:"Argentina",AS:b,AT:"\u00d6sterreich",AU:"Australia",AW:"Aruba",AX:"\u00c5land",AZ:"Az\u0259rbaycan",BA:p,BB:"Barbados",BD:"\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6",BE:"Belgi\u00eb",BF:"Burkina Faso",BG:"\u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f",BH:"\u0627\u0644\u0628\u062d\u0631\u064a\u0646",BI:"Burundi",BJ:"B\u00e9nin",BM:"Bermuda",BN:"Brunei",BO:k,BR:"Brasil",
	BS:"Bahamas",BT:"\u092d\u0942\u091f\u093e\u0928",BV:"Bouvet Island",BW:q,BY:db,BZ:"Belize",CA:"Canada",CC:"Cocos (Keeling) Islands",CD:Ca,CF:Ba,CG:"Congo",CH:"Schweiz",CI:"C\u00f4te d\u2019Ivoire",CK:"Cook Islands",CL:"Chile",CM:"Cameroun",CN:"\u4e2d\u56fd",CO:"Colombia",CR:"Costa Rica",CS:Ga,CU:"Cuba",CV:"Cabo Verde",CX:fa,CY:"\u039a\u03cd\u03c0\u03c1\u03bf\u03c2",CZ:cb,DD:"East Germany",DE:"Deutschland",DJ:"Jabuuti",DK:"Danmark",DM:"Dominica",DO:za,DZ:"\u0627\u0644\u062c\u0632\u0627\u0626\u0631",
	EC:"Ecuador",EE:"Eesti",EG:"\u0645\u0635\u0631",EH:ib,ER:"\u0627\u0631\u064a\u062a\u0631\u064a\u0627",ES:"Espa\u00f1a",ET:X,FI:"Suomi",FJ:"\u092b\u093f\u091c\u0940",FK:ga,FM:x,FO:"F\u00f8royar",FR:"France",FX:"Metropolitan France",GA:"Gabon",GB:Ra,GD:"Grenada",GE:"\u10e1\u10d0\u10e5\u10d0\u10e0\u10d7\u10d5\u10d4\u10da\u10dd",GF:ia,GG:"Guernsey",GH:r,GI:"Gibraltar",GL:ja,GM:"Gambia",GN:"Guin\u00e9e",GP:"Guadeloupe",GQ:ha,GR:"\u0395\u03bb\u03bb\u03ac\u03b4\u03b1",GS:"South Georgia and the South Sandwich Islands",
	GT:"Guatemala",GU:"Guam",GW:"Guin\u00e9 Bissau",GY:"Guyana",HK:"\u9999\u6e2f",HM:"Heard Island and McDonald Islands",HN:t,HR:"Hrvatska",HT:"Ha\u00efti",HU:"Magyarorsz\u00e1g",ID:u,IE:"Ireland",IL:"\u05d9\u05e9\u05e8\u05d0\u05dc",IM:"Isle of Man",IN:W,IO:"British Indian Ocean Territory",IQ:"\u0627\u0644\u0639\u0631\u0627\u0642",IR:"\u0627\u06cc\u0631\u0627\u0646",IS:"\u00cdsland",IT:"Italia",JE:"Jersey",JM:"Jamaica",JO:"\u0627\u0644\u0623\u0631\u062f\u0646",JP:"\u65e5\u672c",KE:"Kenya",KG:eb,KH:"\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6",
	KI:w,KM:lb,KN:Da,KP:mb,KR:"\ub300\ud55c\ubbfc\uad6d",KW:"\u0627\u0644\u0643\u0648\u064a\u062a",KY:ea,KZ:"\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d",LA:"\u0e25\u0e32\u0e27",LB:"\u0644\u0628\u0646\u0627\u0646",LC:"Saint Lucia",LI:"Liechtenstein",LK:"\u0b87\u0bb2\u0b99\u0bcd\u0b95\u0bc8",LR:"Liberia",LS:"Lesotho",LT:"Lietuva",LU:la,LV:"Latvija",LY:"\u0644\u064a\u0628\u064a\u0627",MA:"\u0627\u0644\u0645\u063a\u0631\u0628",MC:"Monaco",MD:oa,ME:"\u0426\u0440\u043d\u0430 \u0413\u043e\u0440\u0430",
	MG:ma,MH:na,MK:"\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0438\u0458\u0430",ML:"\u0645\u0627\u0644\u064a",MM:"Myanmar",MN:"\u8499\u53e4",MO:"\u6fb3\u95e8",MP:sa,MQ:"Martinique",MR:"\u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627",MS:"Montserrat",MT:"Malta",MU:"Mauritius",MV:"Maldives",MW:"Malawi",MX:"M\u00e9xico",MY:"Malaysia",MZ:"Mo\u00e7ambique",NA:"Namibia",NC:ta,NE:"Niger",NF:ra,NG:y,NI:"Nicaragua",NL:"Nederland",NO:"Norge",NP:"\u0928\u0947\u092a\u093e\u0932",NR:"Nauru",NT:"Neutral Zone",
	NU:"Niue",NZ:qa,OM:"\u0639\u0645\u0627\u0646",PA:"Panam\u00e1",PE:"Per\u00fa",PF:wa,PG:z,PH:va,PK:V,PL:"Polska",PM:Fa,PN:"Pitcairn",PR:xa,PS:"\u0641\u0644\u0633\u0637\u064a\u0646",PT:"Portugal",PW:"Palau",PY:ua,QA:"\u0642\u0637\u0631",QO:"Outlying Oceania",QU:"European Union",RE:"R\u00e9union",RO:"Rom\u00e2nia",RS:"\u0421\u0440\u0431\u0438\u0458\u0430",RU:"\u0420\u043e\u0441\u0441\u0438\u044f",RW:A,SA:jb,SB:Ja,SC:Ha,SD:"\u0627\u0644\u0633\u0648\u062f\u0627\u0646",SE:"Sverige",SG:"\u65b0\u52a0\u5761",
	SH:"Saint Helena",SI:"Slovenija",SJ:Ka,SK:Ia,SL:"Sierra Leone",SM:"San Marino",SN:C,SO:"Somali",SR:"Suriname",ST:Ma,SU:"Union of Soviet Socialist Republics",SV:"El Salvador",SY:"\u0633\u0648\u0631\u064a\u0627",SZ:La,TC:Pa,TD:"\u062a\u0634\u0627\u062f",TF:"French Southern Territories",TG:"Togo",TH:"\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22",TJ:"\u062a\u0627\u062c\u06cc\u06a9\u0633\u062a\u0627\u0646",TK:E,TL:Oa,TM:"\u0422\u0443\u0440\u043a\u043c\u0435\u043d\u0438\u0441\u0442\u0430\u043d",
	TN:"\u062a\u0648\u0646\u0633",TO:"Tonga",TR:G,TT:"Trinidad y Tobago",TV:F,TW:"\u53f0\u6e7e",TZ:Na,UA:"\u0423\u043a\u0440\u0430\u0457\u043d\u0430",UG:"Uganda",UM:Ta,US:Sa,UY:"Uruguay",UZ:"\u040e\u0437\u0431\u0435\u043a\u0438\u0441\u0442\u043e\u043d",VA:"Vaticano",VC:Ea,VE:"Venezuela",VG:da,VI:Qa,VN:"Vi\u1ec7t Nam",VU:H,WF:Va,WS:"Samoa",YD:"People's Democratic Republic of Yemen",YE:"\u0627\u0644\u064a\u0645\u0646",YT:"Mayotte",ZA:B,ZM:"Zambia",ZW:"Zimbabwe",ZZ:Ua,aa_DJ:"Jabuuti",aa_ER:"\u00c9rythr\u00e9e",
	aa_ER_SAAHO:"\u00c9rythr\u00e9e",aa_ET:v,af_NA:"Namibi\u00eb",af_ZA:"Suid-Afrika",ak_GH:r,am_ET:X,ar_AE:hb,ar_BH:"\u0627\u0644\u0628\u062d\u0631\u064a\u0646",ar_DJ:"\u062c\u064a\u0628\u0648\u062a\u064a",ar_DZ:"\u0627\u0644\u062c\u0632\u0627\u0626\u0631",ar_EG:"\u0645\u0635\u0631",ar_EH:ib,ar_ER:"\u0627\u0631\u064a\u062a\u0631\u064a\u0627",ar_IL:"\u0627\u0633\u0631\u0627\u0626\u064a\u0644",ar_IQ:"\u0627\u0644\u0639\u0631\u0627\u0642",ar_JO:"\u0627\u0644\u0623\u0631\u062f\u0646",ar_KM:lb,ar_KW:"\u0627\u0644\u0643\u0648\u064a\u062a",
	ar_LB:"\u0644\u0628\u0646\u0627\u0646",ar_LY:"\u0644\u064a\u0628\u064a\u0627",ar_MA:"\u0627\u0644\u0645\u063a\u0631\u0628",ar_MR:"\u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627",ar_OM:"\u0639\u0645\u0627\u0646",ar_PS:"\u0641\u0644\u0633\u0637\u064a\u0646",ar_QA:"\u0642\u0637\u0631",ar_SA:jb,ar_SD:"\u0627\u0644\u0633\u0648\u062f\u0627\u0646",ar_SY:"\u0633\u0648\u0631\u064a\u0627",ar_TD:"\u062a\u0634\u0627\u062f",ar_TN:"\u062a\u0648\u0646\u0633",ar_YE:"\u0627\u0644\u064a\u0645\u0646",as_IN:"\u09ad\u09be\u09f0\u09a4",
	ay_BO:k,az_AZ:"Az\u0259rbaycan",az_Cyrl_AZ:"\u0410\u0437\u04d9\u0440\u0431\u0430\u0458\u04b9\u0430\u043d",az_Latn_AZ:"Azerbaycan",be_BY:db,bg_BG:"\u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f",bi_VU:H,bn_BD:"\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6",bn_IN:"\u09ad\u09be\u09b0\u09a4",bo_CN:"\u0f62\u0f92\u0fb1\u0f0b\u0f53\u0f42",bo_IN:"\u0f62\u0f92\u0fb1\u0f0b\u0f42\u0f62\u0f0b",bs_BA:p,byn_ER:"\u12a4\u122d\u1275\u122b",ca_AD:"Andorra",ca_ES:"Espanya",cch_NG:y,ch_GU:"Guam",chk_FM:x,cop_Arab_EG:"\u0645\u0635\u0631",
	cop_Arab_US:kb,cop_EG:"\u0645\u0635\u0631",cop_US:kb,cs_CZ:cb,cy_GB:"Prydain Fawr",da_DK:"Danmark",da_GL:"Gr\u00f8nland",de_AT:"\u00d6sterreich",de_BE:"Belgien",de_CH:"Schweiz",de_DE:"Deutschland",de_LI:"Liechtenstein",de_LU:"Luxemburg",dv_MV:"Maldives",dz_BT:"Bhutan",ee_GH:r,ee_TG:"Togo",efi_NG:y,el_CY:"\u039a\u03cd\u03c0\u03c1\u03bf\u03c2",el_GR:"\u0395\u03bb\u03bb\u03ac\u03b4\u03b1",en_AG:ca,en_AI:"Anguilla",en_AS:b,en_AU:"Australia",en_BB:"Barbados",en_BE:"Belgium",en_BM:"Bermuda",en_BS:"Bahamas",
	en_BW:q,en_BZ:"Belize",en_CA:"Canada",en_CC:"Cocos Islands",en_CK:"Cook Islands",en_CM:"Cameroon",en_CX:fa,en_DM:"Dominica",en_FJ:"Fiji",en_FK:ga,en_FM:x,en_GB:Ra,en_GD:"Grenada",en_GG:"Guernsey",en_GH:r,en_GI:"Gibraltar",en_GM:"Gambia",en_GU:"Guam",en_GY:"Guyana",en_HK:"Hong Kong",en_HN:t,en_IE:"Ireland",en_IM:"Isle of Man",en_IN:"India",en_JE:"Jersey",en_JM:"Jamaica",en_KE:"Kenya",en_KI:w,en_KN:Da,en_KY:ea,en_LC:"Saint Lucia",en_LR:"Liberia",en_LS:"Lesotho",en_MH:na,en_MP:sa,en_MS:"Montserrat",
	en_MT:"Malta",en_MU:"Mauritius",en_MW:"Malawi",en_NA:"Namibia",en_NF:ra,en_NG:y,en_NR:"Nauru",en_NU:"Niue",en_NZ:qa,en_PG:z,en_PH:va,en_PK:"Pakistan",en_PN:"Pitcairn",en_PR:xa,en_RW:A,en_SB:Ja,en_SC:Ha,en_SG:"Singapore",en_SH:"Saint Helena",en_SL:"Sierra Leone",en_SZ:La,en_TC:Pa,en_TK:E,en_TO:"Tonga",en_TT:"Trinidad and Tobago",en_TV:F,en_TZ:Na,en_UG:"Uganda",en_UM:Ta,en_US:Sa,en_US_POSIX:Sa,en_VC:Ea,en_VG:da,en_VI:Qa,en_VU:H,en_WS:"Samoa",en_ZA:B,en_ZM:"Zambia",en_ZW:"Zimbabwe",es_AR:"Argentina",
	es_BO:k,es_CL:"Chile",es_CO:"Colombia",es_CR:"Costa Rica",es_CU:"Cuba",es_DO:za,es_EC:"Ecuador",es_ES:"Espa\u00f1a",es_GQ:"Guinea Ecuatorial",es_GT:"Guatemala",es_HN:t,es_MX:"M\u00e9xico",es_NI:"Nicaragua",es_PA:"Panam\u00e1",es_PE:"Per\u00fa",es_PH:"Filipinas",es_PR:xa,es_PY:ua,es_SV:"El Salvador",es_US:"Estados Unidos",es_UY:"Uruguay",es_VE:"Venezuela",et_EE:"Eesti",eu_ES:"Espainia",fa_AF:U,fa_IR:"\u0627\u06cc\u0631\u0627\u0646",fi_FI:"Suomi",fil_PH:va,fj_FJ:"Fiji",fo_FO:"F\u00f8royar",fr_BE:"Belgique",
	fr_BF:"Burkina Faso",fr_BI:"Burundi",fr_BJ:"B\u00e9nin",fr_CA:"Canada",fr_CD:Ca,fr_CF:Ba,fr_CG:"Congo",fr_CH:"Suisse",fr_CI:"C\u00f4te d\u2019Ivoire",fr_CM:"Cameroun",fr_DJ:"Djibouti",fr_DZ:"Alg\u00e9rie",fr_FR:"France",fr_GA:"Gabon",fr_GF:ia,fr_GN:"Guin\u00e9e",fr_GP:"Guadeloupe",fr_GQ:ha,fr_HT:"Ha\u00efti",fr_KM:"Comores",fr_LU:la,fr_MA:"Maroc",fr_MC:"Monaco",fr_MG:ma,fr_ML:"Mali",fr_MQ:"Martinique",fr_MU:"Maurice",fr_NC:ta,fr_NE:"Niger",fr_PF:wa,fr_PM:Fa,fr_RE:"R\u00e9union",fr_RW:A,fr_SC:Ha,fr_SN:C,
	fr_SY:"Syrie",fr_TD:"Tchad",fr_TG:"Togo",fr_TN:"Tunisie",fr_VU:H,fr_WF:Va,fr_YT:"Mayotte",fur_IT:"Italia",ga_IE:"\u00c9ire",gaa_GH:r,gez_ER:"\u12a4\u122d\u1275\u122b",gez_ET:X,gil_KI:w,gl_ES:"Espa\u00f1a",gn_PY:ua,gu_IN:"\u0aad\u0abe\u0ab0\u0aa4",gv_GB:Aa,ha_Arab_NG:"\u0646\u064a\u062c\u064a\u0631\u064a\u0627",ha_GH:"\u063a\u0627\u0646\u0627",ha_Latn_GH:r,ha_Latn_NE:"Niger",ha_Latn_NG:"Nig\u00e9ria",ha_NE:"\u0627\u0644\u0646\u064a\u062c\u0631",ha_NG:"\u0646\u064a\u062c\u064a\u0631\u064a\u0627",haw_US:"\u02bbAmelika Hui P\u016b \u02bbIa",
	he_IL:"\u05d9\u05e9\u05e8\u05d0\u05dc",hi_IN:W,ho_PG:z,hr_BA:p,hr_HR:"Hrvatska",ht_HT:"Ha\u00efti",hu_HU:"Magyarorsz\u00e1g",hy_AM:gb,hy_AM_REVISED:gb,id_ID:u,ig_NG:y,ii_CN:"\ua34f\ua1e9",is_IS:"\u00cdsland",it_CH:"Svizzera",it_IT:"Italia",it_SM:"San Marino",ja_JP:"\u65e5\u672c",ka_GE:"\u10e1\u10d0\u10e5\u10d0\u10e0\u10d7\u10d5\u10d4\u10da\u10dd",kaj_NG:y,kam_KE:"Kenya",kcg_NG:y,kfo_NG:"Nig\u00e9ria",kk_KZ:"\u049a\u0430\u0437\u0430\u049b\u0441\u0442\u0430\u043d",kl_GL:ja,km_KH:"\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6",
	kn_IN:"\u0cad\u0cbe\u0cb0\u0ca4",ko_KP:mb,ko_KR:"\ub300\ud55c\ubbfc\uad6d",kok_IN:W,kos_FM:x,kpe_GN:"Guin\u00e9e",kpe_LR:"Lib\u00e9ria",ks_IN:W,ku_IQ:"Irak",ku_IR:"\u0130ran",ku_Latn_IQ:"Irak",ku_Latn_IR:"\u0130ran",ku_Latn_SY:"Suriye",ku_Latn_TR:G,ku_SY:"Suriye",ku_TR:G,kw_GB:Aa,ky_Cyrl_KG:eb,ky_KG:"K\u0131rg\u0131zistan",la_VA:"Vaticano",lb_LU:la,ln_CD:Ca,ln_CG:"Kongo",lo_LA:"Laos",lt_LT:"Lietuva",lv_LV:"Latvija",mg_MG:ma,mh_MH:na,mi_NZ:qa,mk_MK:"\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0438\u0458\u0430",
	ml_IN:"\u0d07\u0d28\u0d4d\u0d24\u0d4d\u0d2f",mn_Cyrl_MN:"\u041c\u043e\u043d\u0433\u043e\u043b\u0438\u044f",mn_MN:"\u041c\u043e\u043d\u0433\u043e\u043b\u0438\u044f",mr_IN:W,ms_BN:"Brunei",ms_MY:"Malaysia",ms_SG:"Singapura",mt_MT:"Malta",my_MM:"Myanmar",na_NR:"Nauru",nb_NO:"Norge",nb_SJ:Ka,ne_NP:"\u0928\u0947\u092a\u093e\u0932",niu_NU:"Niue",nl_AN:pa,nl_AW:"Aruba",nl_BE:"Belgi\u00eb",nl_NL:"Nederland",nl_SR:"Suriname",nn_NO:"Noreg",nr_ZA:B,nso_ZA:B,ny_MW:"Malawi",om_ET:v,om_KE:"Keeniyaa",or_IN:"\u0b2d\u0b3e\u0b30\u0b24",
	pa_Arab_PK:V,pa_Guru_IN:"\u0a2d\u0a3e\u0a30\u0a24",pa_IN:"\u0a2d\u0a3e\u0a30\u0a24",pa_PK:V,pap_AN:pa,pau_PW:"Palau",pl_PL:"Polska",pon_FM:x,ps_AF:U,pt_AO:"Angola",pt_BR:"Brasil",pt_CV:"Cabo Verde",pt_GW:"Guin\u00e9 Bissau",pt_MZ:"Mo\u00e7ambique",pt_PT:"Portugal",pt_ST:Ma,pt_TL:Oa,qu_BO:k,qu_PE:"Per\u00fa",rm_CH:"Schweiz",rn_BI:"Burundi",ro_MD:oa,ro_RO:"Rom\u00e2nia",ru_BY:db,ru_KG:eb,ru_KZ:"\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d",ru_RU:"\u0420\u043e\u0441\u0441\u0438\u044f",ru_UA:"\u0423\u043a\u0440\u0430\u0438\u043d\u0430",
	rw_RW:A,sa_IN:W,sd_Deva_IN:W,sd_IN:W,se_FI:"Finland",se_NO:"Norge",sg_CF:Ba,sh_BA:"Bosnia and Herzegovina",sh_CS:Ga,si_LK:"Sri Lanka",sid_ET:v,sk_SK:Ia,sl_SI:"Slovenija",sm_AS:b,sm_WS:"Samoa",so_DJ:"Jabuuti",so_ET:"Itoobiya",so_KE:"Kiiniya",so_SO:"Soomaaliya",sq_AL:"Shqip\u00ebria",sr_BA:"\u0411\u043e\u0441\u043d\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043e\u0432\u0438\u043d\u0430",sr_CS:"\u0421\u0440\u0431\u0438\u0458\u0430 \u0438 \u0426\u0440\u043d\u0430 \u0413\u043e\u0440\u0430",sr_Cyrl_BA:"\u0411\u043e\u0441\u043d\u0438\u044f",
	sr_Cyrl_CS:"\u0421\u0435\u0440\u0431\u0438\u044f \u0438 \u0427\u0435\u0440\u043d\u043e\u0433\u043e\u0440\u0438\u044f",sr_Cyrl_ME:"\u0427\u0435\u0440\u043d\u043e\u0433\u043e\u0440\u0438\u044f",sr_Cyrl_RS:"\u0421\u0435\u0440\u0431\u0438\u044f",sr_Latn_BA:p,sr_Latn_CS:"Srbija i Crna Gora",sr_Latn_ME:"Crna Gora",sr_Latn_RS:"Srbija",sr_ME:"\u0426\u0440\u043d\u0430 \u0413\u043e\u0440\u0430",sr_RS:"\u0421\u0440\u0431\u0438\u0458\u0430",ss_SZ:La,ss_ZA:B,st_LS:"Lesotho",st_ZA:B,su_ID:u,sv_AX:"\u00c5land",
	sv_FI:"Finland",sv_SE:"Sverige",sw_KE:"Kenya",sw_TZ:Na,sw_UG:"Uganda",swb_KM:lb,syr_SY:"Syria",ta_IN:"\u0b87\u0ba8\u0bcd\u0ba4\u0bbf\u0baf\u0bbe",ta_LK:"\u0b87\u0bb2\u0b99\u0bcd\u0b95\u0bc8",ta_SG:"\u0b9a\u0bbf\u0b99\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bcd",te_IN:"\u0c2d\u0c3e\u0c30\u0c24 \u0c26\u0c47\u0c33\u0c02",tet_TL:Oa,tg_Cyrl_TJ:"\u0422\u0430\u0434\u0436\u0438\u043a\u0438\u0441\u0442\u0430\u043d",tg_TJ:"\u062a\u0627\u062c\u06a9\u0633\u062a\u0627\u0646",th_TH:"\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22",
	ti_ER:"\u12a4\u122d\u1275\u122b",ti_ET:X,tig_ER:"\u12a4\u122d\u1275\u122b",tk_TM:"\u062a\u0631\u06a9\u0645\u0646\u0633\u062a\u0627\u0646",tkl_TK:E,tn_BW:q,tn_ZA:B,to_TO:"Tonga",tpi_PG:z,tr_CY:"G\u00fcney K\u0131br\u0131s Rum Kesimi",tr_TR:G,ts_ZA:B,tt_RU:"\u0420\u043e\u0441\u0441\u0438\u044f",tvl_TV:F,ty_PF:wa,uk_UA:"\u0423\u043a\u0440\u0430\u0457\u043d\u0430",uli_FM:x,und_ZZ:Ua,ur_IN:"\u0628\u06be\u0627\u0631\u062a",ur_PK:V,uz_AF:"Afganistan",uz_Arab_AF:U,uz_Cyrl_UZ:"\u0423\u0437\u0431\u0435\u043a\u0438\u0441\u0442\u0430\u043d",
	uz_Latn_UZ:"O\u02bfzbekiston",uz_UZ:"\u040e\u0437\u0431\u0435\u043a\u0438\u0441\u0442\u043e\u043d",ve_ZA:B,vi_VN:"Vi\u1ec7t Nam",wal_ET:X,wo_Arab_SN:"\u0627\u0644\u0633\u0646\u063a\u0627\u0644",wo_Latn_SN:C,wo_SN:C,xh_ZA:B,yap_FM:x,yo_NG:y,zh_CN:"\u4e2d\u56fd",zh_HK:"\u9999\u6e2f",zh_Hans_CN:"\u4e2d\u56fd",zh_Hans_SG:"\u65b0\u52a0\u5761",zh_Hant_HK:"\u4e2d\u83ef\u4eba\u6c11\u5171\u548c\u570b\u9999\u6e2f\u7279\u5225\u884c\u653f\u5340",zh_Hant_MO:"\u6fb3\u9580",zh_Hant_TW:"\u81fa\u7063",zh_MO:"\u6fb3\u95e8",
	zh_SG:"\u65b0\u52a0\u5761",zh_TW:"\u53f0\u6e7e",zu_ZA:B},LANGUAGE:{aa:"afar",ab:"\u0430\u0431\u0445\u0430\u0437\u0441\u043a\u0438\u0439",ace:"Aceh",ach:"Acoli",ada:"Adangme",ady:"\u0430\u0434\u044b\u0433\u0435\u0439\u0441\u043a\u0438\u0439",ae:"Avestan",af:"Afrikaans",afa:"Afro-Asiatic Language",afh:"Afrihili",ain:"Ainu",ak:"Akan",akk:"Akkadian",ale:"Aleut",alg:"Algonquian Language",alt:"Southern Altai",am:"\u12a0\u121b\u122d\u129b",an:"Aragonese",ang:"Old English",anp:"Angika",apa:"Apache Language",
	ar:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629",arc:"Aramaic",arn:"Araucanian",arp:"Arapaho",art:"Artificial Language",arw:"Arawak",as:"\u0985\u09b8\u09ae\u09c0\u09af\u09bc\u09be",ast:"asturiano",ath:"Athapascan Language",aus:"Australian Language",av:"\u0430\u0432\u0430\u0440\u0441\u043a\u0438\u0439",awa:"Awadhi",ay:"aimara",az:"az\u0259rbaycanca",az_Arab:"\u062a\u0631\u06a9\u06cc \u0622\u0630\u0631\u0628\u0627\u06cc\u062c\u0627\u0646\u06cc",az_Cyrl:"\u0410\u0437\u04d9\u0440\u0431\u0430\u0458\u04b9\u0430\u043d",
	az_Latn:"Azerice",ba:"\u0431\u0430\u0448\u043a\u0438\u0440\u0441\u043a\u0438\u0439",bad:"Banda",bai:"Bamileke Language",bal:"\u0628\u0644\u0648\u0686\u06cc",ban:"Balin",bas:"Basa",bat:"Baltic Language",be:"\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f",bej:"Beja",bem:"Bemba",ber:"Berber",bg:"\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438",bh:"\u092c\u093f\u0939\u093e\u0930\u0940",bho:"Bhojpuri",bi:"bichelamar ; bislama",bik:"Bikol",bin:"Bini",bla:"Siksika",bm:"bambara",bn:"\u09ac\u09be\u0982\u09b2\u09be",
	bnt:"Bantu",bo:"\u0f54\u0f7c\u0f51\u0f0b\u0f66\u0f90\u0f51\u0f0b",br:"breton",bra:"Braj",bs:"Bosanski",btk:"Batak",bua:"Buriat",bug:"Bugis",byn:"\u1265\u120a\u1295",ca:"catal\u00e0",cad:"Caddo",cai:"Central American Indian Language",car:"Carib",cau:"Caucasian Language",cch:"Atsam",ce:"\u0447\u0435\u0447\u0435\u043d\u0441\u043a\u0438\u0439",ceb:"Cebuano",cel:"Celtic Language",ch:"Chamorro",chb:"Chibcha",chg:"Chagatai",chk:"Chuukese",chm:"\u043c\u0430\u0440\u0438\u0439\u0441\u043a\u0438\u0439 (\u0447\u0435\u0440\u0435\u043c\u0438\u0441\u0441\u043a\u0438\u0439)",
	chn:"Chinook Jargon",cho:"Choctaw",chp:"Chipewyan",chr:"Cherokee",chy:"Cheyenne",cmc:"Chamic Language",co:"corse",cop:"\u0642\u0628\u0637\u064a\u0629",cop_Arab:"\u0642\u0628\u0637\u064a\u0629",cpe:"English-based Creole or Pidgin",cpf:"French-based Creole or Pidgin",cpp:"Portuguese-based Creole or Pidgin",cr:"Cree",crh:"Crimean Turkish",crp:"Creole or Pidgin",cs:"\u010de\u0161tina",csb:"Kashubian",cu:"Church Slavic",cus:"Cushitic Language",cv:"\u0447\u0443\u0432\u0430\u0448\u0441\u043a\u0438\u0439",
	cy:"Cymraeg",da:"dansk",dak:"Dakota",dar:"\u0434\u0430\u0440\u0433\u0432\u0430",day:"Dayak",de:"Deutsch",del:"Delaware",den:"Slave",dgr:"Dogrib",din:"Dinka",doi:"\u0627\u0644\u062f\u0648\u062c\u0631\u0649",dra:"Dravidian Language",dsb:"Lower Sorbian",dua:"Duala",dum:"Middle Dutch",dv:"Divehi",dyu:"dioula",dz:"\u0f62\u0fab\u0f7c\u0f44\u0f0b\u0f41",ee:"Ewe",efi:"Efik",egy:"Ancient Egyptian",eka:"Ekajuk",el:"\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",elx:"Elamite",en:"English",enm:"Middle English",
	eo:"esperanto",es:"espa\u00f1ol",et:"eesti",eu:"euskara",ewo:"Ewondo",fa:"\u0641\u0627\u0631\u0633\u06cc",fan:"fang",fat:"Fanti",ff:"Fulah",fi:"suomi",fil:"Filipino",fiu:"Finno-Ugrian Language",fj:"Fijian",fo:"f\u00f8royskt",fon:"Fon",fr:"fran\u00e7ais",frm:"Middle French",fro:"Old French",frr:"Northern Frisian",frs:"Eastern Frisian",fur:"friulano",fy:"Fries",ga:"Gaeilge",gaa:"Ga",gay:"Gayo",gba:"Gbaya",gd:"Scottish Gaelic",gem:"Germanic Language",gez:"\u130d\u12d5\u12dd\u129b",gil:"Gilbertese",gl:"galego",
	gmh:"Middle High German",gn:"guaran\u00ed",goh:"Old High German",gon:"Gondi",gor:"Gorontalo",got:"Gothic",grb:"Grebo",grc:"\u0391\u03c1\u03c7\u03b1\u03af\u03b1 \u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",gsw:"Schweizerdeutsch",gu:"\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0",gv:"Gaelg",gwi:"Gwich\u02bcin",ha:"\u0627\u0644\u0647\u0648\u0633\u0627",ha_Arab:"\u0627\u0644\u0647\u0648\u0633\u0627",ha_Latn:"haoussa",hai:"Haida",haw:"\u02bb\u014dlelo Hawai\u02bbi",he:"\u05e2\u05d1\u05e8\u05d9\u05ea",
	hi:"\u0939\u093f\u0902\u0926\u0940",hil:"Hiligaynon",him:"Himachali",hit:"Hittite",hmn:"Hmong",ho:"Hiri Motu",hr:"hrvatski",hsb:"Upper Sorbian",ht:"ha\u00eftien",hu:"magyar",hup:"Hupa",hy:"\u0540\u0561\u0575\u0565\u0580\u0567\u0576",hz:"Herero",ia:"interlingvao",iba:"Iban",id:"Bahasa Indonesia",ie:"Interlingue",ig:"Igbo",ii:"\ua188\ua320\ua259",ijo:"Ijo",ik:"Inupiaq",ilo:"Iloko",inc:"Indic Language",ine:"Indo-European Language",inh:"\u0438\u043d\u0433\u0443\u0448\u0441\u043a\u0438\u0439",io:"Ido",
	ira:"Iranian Language",iro:"Iroquoian Language",is:"\u00edslenska",it:"italiano",iu:"Inuktitut",ja:"\u65e5\u672c\u8a9e",jbo:"Lojban",jpr:"Judeo-Persian",jrb:"Judeo-Arabic",jv:"Jawa",ka:"\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8",kaa:"\u043a\u0430\u0440\u0430\u043a\u0430\u043b\u043f\u0430\u043a\u0441\u043a\u0438\u0439",kab:"kabyle",kac:"Kachin",kaj:"Jju",kam:"Kamba",kar:"Karen",kaw:"Kawi",kbd:"\u043a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u0441\u043a\u0438\u0439",kcg:"Tyap",kfo:"koro",kg:"Kongo",
	kha:"Khasi",khi:"Khoisan Language",kho:"Khotanese",ki:"Kikuyu",kj:"Kuanyama",kk:"\u049a\u0430\u0437\u0430\u049b",kl:"kalaallisut",km:"\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a",kmb:"quimbundo",kn:"\u0c95\u0ca8\u0ccd\u0ca8\u0ca1",ko:"\ud55c\uad6d\uc5b4",kok:"\u0915\u094b\u0902\u0915\u0923\u0940",kos:"Kosraean",kpe:"kpell\u00e9",kr:"Kanuri",krc:"\u043a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0431\u0430\u043b\u043a\u0430\u0440\u0441\u043a\u0438\u0439",krl:"\u043a\u0430\u0440\u0435\u043b\u044c\u0441\u043a\u0438\u0439",
	kro:"Kru",kru:"Kurukh",ks:"\u0915\u093e\u0936\u094d\u092e\u093f\u0930\u0940",ku:"K\u00fcrt\u00e7e",ku_Arab:"\u0627\u0644\u0643\u0631\u062f\u064a\u0629",ku_Latn:"K\u00fcrt\u00e7e",kum:"\u043a\u0443\u043c\u044b\u043a\u0441\u043a\u0438\u0439",kut:"Kutenai",kv:"Komi",kw:"kernewek",ky:"K\u0131rg\u0131zca",ky_Arab:"\u0627\u0644\u0642\u064a\u0631\u063a\u0633\u062a\u0627\u0646\u064a\u0629",ky_Cyrl:"\u043a\u0438\u0440\u0433\u0438\u0437\u0441\u043a\u0438\u0439",la:"latino",lad:"\u05dc\u05d3\u05d9\u05e0\u05d5",
	lah:"\u0644\u0627\u0647\u0646\u062f\u0627",lam:"Lamba",lb:"luxembourgeois",lez:"\u043b\u0435\u0437\u0433\u0438\u043d\u0441\u043a\u0438\u0439",lg:"Ganda",li:"Limburgs",ln:"lingala",lo:"Lao",lol:"mongo",loz:"Lozi",lt:"lietuvi\u0173",lu:"luba-katanga",lua:"luba-lulua",lui:"Luiseno",lun:"Lunda",luo:"Luo",lus:"Lushai",lv:"latvie\u0161u",mad:"Madura",mag:"Magahi",mai:"Maithili",mak:"Makassar",man:"Mandingo",map:"Austronesian",mas:"Masai",mdf:"\u043c\u043e\u043a\u0448\u0430",mdr:"Mandar",men:"Mende",mg:"malgache",
	mga:"Middle Irish",mh:"Marshallese",mi:"Maori",mic:"Micmac",min:"Minangkabau",mis:"Miscellaneous Language",mk:"\u043c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438",mkh:"Mon-Khmer Language",ml:"\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02",mn:fb,mn_Cyrl:fb,mn_Mong:fb,mnc:"Manchu",mni:"Manipuri",mno:"Manobo Language",mo:"Moldavian",moh:"Mohawk",mos:"mor\u00e9 ; mossi",mr:"\u092e\u0930\u093e\u0920\u0940",ms:"Bahasa Melayu",mt:"Malti",mul:"Multiple Languages",mun:"Munda Language",mus:"Creek",mwl:"Mirandese",
	mwr:"Marwari",my:"Burmese",myn:"Mayan Language",myv:"\u044d\u0440\u0437\u044f",na:"Nauru",nah:"Nahuatl",nai:"North American Indian Language",nap:"napoletano",nb:"norsk bokm\u00e5l",nd:"North Ndebele",nds:"Low German",ne:"\u0928\u0947\u092a\u093e\u0932\u0940","new":"Newari",ng:"Ndonga",nia:"Nias",nic:"Niger-Kordofanian Language",niu:"Niuean",nl:"Nederlands",nn:"nynorsk",no:"Norwegian",nog:"\u043d\u043e\u0433\u0430\u0439\u0441\u043a\u0438\u0439",non:"Old Norse",nqo:"N\u2019Ko",nr:"South Ndebele",nso:"Northern Sotho",
	nub:"Nubian Language",nv:"Navajo",nwc:"Classical Newari",ny:"nianja; chicheua; cheua",nym:"Nyamwezi",nyn:"Nyankole",nyo:"Nyoro",nzi:"Nzima",oc:"occitan",oj:"Ojibwa",om:"Oromoo",or:"\u0b13\u0b21\u0b3c\u0b3f\u0b06",os:"\u043e\u0441\u0435\u0442\u0438\u043d\u0441\u043a\u0438\u0439",osa:"Osage",ota:"Ottoman Turkish",oto:"Otomian Language",pa:"\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40",pa_Arab:"\u067e\u0646\u062c\u0627\u0628",pa_Guru:"\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40",paa:"Papuan Language",pag:"Pangasinan",
	pal:"Pahlavi",pam:"Pampanga",pap:"Papiamento",pau:"Palauan",peo:"Old Persian",phi:"Philippine Language",phn:"Phoenician",pi:"\u0e1a\u0e32\u0e25\u0e35",pl:"polski",pon:"Pohnpeian",pra:"Prakrit Language",pro:"Old Proven\u00e7al",ps:"\u067e\u069a\u062a\u0648",pt:"portugu\u00eas",qu:"quechua",raj:"Rajasthani",rap:"Rapanui",rar:"Rarotongan",rm:"R\u00e4toromanisch",rn:"roundi",ro:"rom\u00e2n\u0103",roa:"Romance Language",rom:"Romany",ru:"\u0440\u0443\u0441\u0441\u043a\u0438\u0439",rup:"Aromanian",rw:"rwanda",
	sa:"\u0938\u0902\u0938\u094d\u0915\u0943\u0924 \u092d\u093e\u0937\u093e",sad:"Sandawe",sah:"\u044f\u043a\u0443\u0442\u0441\u043a\u0438\u0439",sai:"South American Indian Language",sal:"Salishan Language",sam:"\u05d0\u05e8\u05de\u05d9\u05ea \u05e9\u05d5\u05de\u05e8\u05d5\u05e0\u05d9\u05ea",sas:"Sasak",sat:"Santali",sc:"Sardinian",scn:"siciliano",sco:"Scots",sd:"\u0938\u093f\u0928\u094d\u0927\u0940",sd_Arab:"\u0633\u0646\u062f\u06cc",sd_Deva:"\u0938\u093f\u0928\u094d\u0927\u0940",se:"nordsamiska",sel:"\u0441\u0435\u043b\u044c\u043a\u0443\u043f\u0441\u043a\u0438\u0439",
	sem:"Semitic Language",sg:"sangho",sga:"Old Irish",sgn:"Sign Language",sh:"Serbo-Croatian",shn:"Shan",si:"Sinhalese",sid:"Sidamo",sio:"Siouan Language",sit:"Sino-Tibetan Language",sk:"slovensk\u00fd",sl:"sloven\u0161\u010dina",sla:"Slavic Language",sm:"Samoan",sma:"sydsamiska",smi:"Sami Language",smj:"lulesamiska",smn:"Inari Sami",sms:"Skolt Sami",sn:"Shona",snk:"sonink\u00e9",so:"Soomaali",sog:"Sogdien",son:"Songhai",sq:"shqipe",sr:"\u0421\u0440\u043f\u0441\u043a\u0438",sr_Cyrl:"\u0441\u0435\u0440\u0431\u0441\u043a\u0438\u0439",
	sr_Latn:"Srpski",srn:"Sranantongo",srr:"s\u00e9r\u00e8re",ss:"Swati",ssa:"Nilo-Saharan Language",st:"Sesotho",su:"Sundan",suk:"Sukuma",sus:"soussou",sux:"Sumerian",sv:"svenska",sw:"Kiswahili",syc:"Classical Syriac",syr:"Syriac",ta:"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd",tai:"Tai Language",te:"\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41",tem:"Timne",ter:"Tereno",tet:"t\u00e9tum",tg:"\u062a\u0627\u062c\u06a9",tg_Arab:"\u062a\u0627\u062c\u06a9",tg_Cyrl:"\u0442\u0430\u0434\u0436\u0438\u043a\u0441\u043a\u0438\u0439",
	th:"\u0e44\u0e17\u0e22",ti:"\u1275\u130d\u122d\u129b",tig:"\u1275\u130d\u1228",tiv:"Tiv",tk:"\u062a\u0631\u06a9\u0645\u0646\u06cc",tkl:E,tl:"Tagalog",tlh:"Klingon",tli:"Tlingit",tmh:"tamacheq",tn:"Tswana",to:"Tonga",tog:"Nyasa Tonga",tpi:"Tok Pisin",tr:"T\u00fcrk\u00e7e",ts:"Tsonga",tsi:"Tsimshian",tt:"\u0442\u0430\u0442\u0430\u0440\u0441\u043a\u0438\u0439",tum:"Tumbuka",tup:"Tupi Language",tut:"\u0430\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0435 (\u0434\u0440\u0443\u0433\u0438\u0435)",tvl:F,tw:"Twi",
	ty:"tahitien",tyv:"\u0442\u0443\u0432\u0438\u043d\u0441\u043a\u0438\u0439",udm:"\u0443\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0438\u0439",ug:"\u0443\u0439\u0433\u0443\u0440\u0441\u043a\u0438\u0439",uga:"Ugaritic",uk:"\u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",umb:"umbundu",und:"English",ur:"\u0627\u0631\u062f\u0648",uz:"\u040e\u0437\u0431\u0435\u043a",uz_Arab:"\u0627\u06c9\u0632\u0628\u06d0\u06a9",uz_Cyrl:"\u0443\u0437\u0431\u0435\u043a\u0441\u043a\u0438\u0439",uz_Latn:"o'zbekcha",
	vai:"Vai",ve:"Venda",vi:"Ti\u1ebfng Vi\u1ec7t",vo:"volapuko",vot:"Votic",wa:"Wallonisch",wak:"Wakashan Language",wal:"Walamo",war:"Waray",was:"Washo",wen:"Sorbian Language",wo:"wolof",wo_Arab:"\u0627\u0644\u0648\u0644\u0648\u0641",wo_Latn:"wolof",xal:"\u043a\u0430\u043b\u043c\u044b\u0446\u043a\u0438\u0439",xh:"Xhosa",yao:"iao",yap:"Yapese",yi:"\u05d9\u05d9\u05d3\u05d9\u05e9",yo:"Yoruba",ypk:"Yupik Language",za:"Zhuang",zap:"Zapotec",zen:"Zenaga",zh:"\u4e2d\u6587",zh_Hans:"\u4e2d\u6587",zh_Hant:"\u4e2d\u6587",
	znd:"Zande",zu:"Zulu",zun:"Zuni",zxx:"No linguistic content",zza:"Zaza"}};Z.locale.dg=function(a){a=a.replace(/-/g,"_");Z.locale.N=a};Z.locale.Da=function(){Z.locale.N||(Z.locale.N="en");return Z.locale.N};Z.locale.H={Dd:"DateTimeConstants",Ld:"NumberFormatConstants",ic:"TimeZoneConstants",Yb:ka,jc:"TimeZoneSelectedIds",lc:"TimeZoneSelectedShortNames",kc:"TimeZoneSelectedLongNames",hc:"TimeZoneAllLongNames"};Z.locale.Ca=function(a){return(a=a.match(/^\w{2,3}([-_]|$)/))?a[0].replace(/[_-]/g,""):""};
	Z.locale.mb=function(a){return(a=a.match(/[-_]([a-zA-Z]{2}|\d{3})([-_]|$)/))?a[0].replace(/[_-]/g,""):""};Z.locale.We=function(a){a=a.split(/[-_]/g);return 1<a.length&&a[1].match(/^[a-zA-Z]{4}$/)?a[1]:""};Z.locale.Xe=function(a){return(a=a.match(/[-_]([a-z]{2,})/))?a[1]:""};Z.locale.Se=function(a){var c=Z.locale.Ca(a)+"_"+Z.locale.mb(a);return c in Z.locale.J.COUNTRY?Z.locale.J.COUNTRY[c]:a};Z.locale.Oe=function(a,c){c||(c=Z.locale.ob());var d=Z.locale.mb(a);return d in c.COUNTRY?c.COUNTRY[d]:a};
	Z.locale.Te=function(a){if(a in Z.locale.J.LANGUAGE)return Z.locale.J.LANGUAGE[a];var c=Z.locale.Ca(a);return c in Z.locale.J.LANGUAGE?Z.locale.J.LANGUAGE[c]:a};Z.locale.Pe=function(a,c){c||(c=Z.locale.ob());if(a in c.LANGUAGE)return c.LANGUAGE[a];var d=Z.locale.Ca(a);return d in c.LANGUAGE?c.LANGUAGE[d]:a};Z.locale.K=function(a,c,d){Z.locale.m[c]||(Z.locale.m[c]={});Z.locale.m[c][d]=a;Z.locale.N||(Z.locale.N=d)};Z.locale.rf=function(a,c){return a in Z.locale.m&&c in Z.locale.m[a]};Z.locale.m={};
	Z.locale.Pf=function(a,c){Z.locale.K(a,Z.locale.H.ic,c)};Z.locale.Nf=function(a,c){Z.locale.K(a,Z.locale.H.Yb,c)};Z.locale.Qf=function(a,c){Z.locale.K(a,Z.locale.H.jc,c)};Z.locale.Sf=function(a,c){Z.locale.K(a,Z.locale.H.lc,c)};Z.locale.Rf=function(a,c){Z.locale.K(a,Z.locale.H.kc,c)};Z.locale.Of=function(a,c){Z.locale.K(a,Z.locale.H.hc,c)};Z.locale.ob=function(){var a=Z.locale.Da(),a=a?a:Z.locale.Da();if(ka in Z.locale.m)return Z.locale.m.LocaleNameConstants[a]};
	Z.locale.Ve=function(a,c){c=c?c:Z.locale.Da();if(a in Z.locale.m){if(c in Z.locale.m[a])return Z.locale.m[a][c];c=c.split("_");return 1<c.length&&c[0]in Z.locale.m[a]?Z.locale.m[a][c[0]]:Z.locale.m[a].en}};var google={a:{}};google.a.c={};
	google.a.c.languages={af:!0,am:!0,az:!0,ar:!0,arb:"ar",bg:!0,bn:!0,ca:!0,cs:!0,cmn:"zh",da:!0,de:!0,el:!0,en:!0,en_gb:!0,es:!0,es_419:!0,et:!0,eu:!0,fa:!0,fi:!0,fil:!0,fr:!0,fr_ca:!0,gl:!0,ka:!0,gu:!0,he:"iw",hi:!0,hr:!0,hu:!0,hy:!0,id:!0,"in":"id",is:!0,it:!0,iw:!0,ja:!0,ji:"yi",jv:!1,jw:"jv",km:!0,kn:!0,ko:!0,lo:!0,lt:!0,lv:!0,ml:!0,mn:!0,mo:"ro",mr:!0,ms:!0,nb:"no",ne:!0,nl:!0,no:!0,pl:!0,pt:"pt_br",pt_br:!0,pt_pt:!0,ro:!0,ru:!0,si:!0,sk:!0,sl:!0,sr:!0,sv:!0,sw:!0,swh:"sw",ta:!0,te:!0,th:!0,tl:"fil",
	tr:!0,uk:!0,ur:!0,vi:!0,yi:!1,zh:"zh_cn",zh_cn:!0,zh_hk:!0,zh_tw:!0,zsm:"ms",zu:!0};google.a.c.R={};google.a.c.I="unknown";google.a.c.log=Y();google.a.c.error=Y();google.a.c.Z=!1;google.a.c.window=window;google.a.c.vd={1:"1.0","1.0":"current","1.1":"upcoming",current:"45",upcoming:"45",41:"top",42:"top",43:"top",44:"top"};
	google.a.c.Ta={gstatic:{prefix:"https://www.gstatic.com/charts",debug:"{prefix}/debug/{version}/jsapi_debug_{package}_module.js",compiled:"{prefix}/{version}/js/jsapi_compiled_{package}_module.js",i18n:"{prefix}/{version}/i18n/jsapi_compiled_i18n_{package}_module__{language}.js",css_prefix:"{prefix}/{version}/css",css:Za,css_debug:Za,third_party:ab,third_party_gen:ab}};google.a.c.i=google.a.c.Ta.gstatic;
	google.a.c.Dc={format:[],"default":["format"],ui:["default"],ui_base:["default"],annotatedtimeline:[Q],annotationchart:[Q,"controls",L,"table"],areachart:[Q,J],bar:[Q,M,S],barchart:[Q,J],browserchart:[Q],calendar:[Q],charteditor:[Q,L,O,Wa,"gauge","motionchart","orgchart","table"],charteditor_base:[R,L,O,Wa,"gauge","motionchart","orgchart","table_base"],columnchart:[Q,J],controls:[Q],controls_base:[R],corechart:[Q],gantt:[Q,M],gauge:[Q],geochart:[Q],geomap:[Q],geomap_base:[R],helloworld:[Q],imageareachart:[Q,
	O],imagebarchart:[Q,O],imagelinechart:[Q,O],imagechart:[Q],imagepiechart:[Q,O],imagesparkline:[Q,O],intensitymap:[Q],line:[Q,M,S],linechart:[Q,J],map:[Q],motionchart:[Q],orgchart:[Q],overtimecharts:[Q,L],piechart:[Q,J],sankey:["d3","d3.sankey",Q],scatter:[Q,M,S],scatterchart:[Q,J],table:[Q],table_base:[R],timeline:[Q,M],treemap:[Q],wordtree:[Q]};google.a.c.pd={d3:"d3/d3.js","d3.sankey":"d3/d3.sankey.js",webfontloader:"webfontloader/webfont.js"};google.a.c.Eb={dygraph:"dygraphs/dygraph-tickers-combined.js"};
	google.a.c.Ac={annotatedtimeline:"/annotatedtimeline/annotatedtimeline.css",annotationchart:"annotationchart/annotationchart.css",charteditor:"charteditor/charteditor.css",charteditor_base:"charteditor/charteditor_base.css",controls:"controls/controls.css",imagesparkline:"imagesparkline/imagesparkline.css",intensitymap:"intensitymap/intensitymap.css",orgchart:"orgchart/orgchart.css",table:"table/table.css",table_base:"table/table_base.css",ui:["util/util.css","core/tooltip.css"],ui_base:"util/util_base.css"};
	google.a.c.ra=function(a,c){c=c||{};for(var d=[],e=0;e<a.length;e++){var f=a[e];if(!c[f]){c[f]=!0;var g=google.a.c.Dc[f]||[];0<g.length&&(d=d.concat(google.a.c.ra(g,c)));d.push(f)}}return d};google.a.c.Jc=function(a){for(var c={},d=[],e=0;e<a.length;e++){var f=google.a.c.Ac[a[e]];Z.isArray(f)||(f=[f]);for(var g=0;g<f.length;g++){var h=f[g];h&&!c[h]&&(c[h]=!0,d.push(h))}}return d};
	google.a.c.jd=function(a,c){if(c)if("undefined"===typeof a.onload){var d=!1;a.onreadystatechange=function(){d||(a.readyState&&a.readyState!==K?google.a.c.window.setTimeout(a.onreadystatechange,0):(d=!0,delete a.onreadystatechange,google.a.c.window.setTimeout(c,0)))}}else a.onload=c};
	google.a.c.zb=function(a,c,d){google.a.c.log("loadScript: "+a);var e=c.createElement("script");e.type=Ya;e.language="javascript";e.async=!1;e.defer=!1;c=c.body||c.head||c.getElementsByTagName("HEAD").item(0)||c.documentElement;c.insertBefore(e,c.lastChild);d&&google.a.c.jd(e,d);e.src=a;google.a.c.log("end loadScript: "+a)};
	google.a.c.Xc=function(a,c){a=google.a.c.ra(a);for(var d=[],e=0;e<a.length;e++){var f=a[e];google.a.c.R[f]||d.push(f)}a=d;if(0===a.length)c();else{google.a.c.log("Load packages + dependencies - previous: "+a);var g=google.a.c.i.prefix,h=google.a.c.i.debug,l=google.a.c.i.compiled,m=google.a.c.i.i18n,n=google.a.c.I,T=google.a.c.Ma;"en"===T&&(T=null);var D={},ya=a.length,ob=function(){for(var d=[],e=0;e<a.length;e++)d.push(D[a[e]]);eval("0,(function(){"+d.join("")+"})")();google.a.c.window.setTimeout(c,
	0)};google.a.c.cd=function(a,c){google.a.c.log("callback after loading "+a);D[a]=c;google.a.c.R[a]=!0;ya--;0===ya&&ob()};var nb=function(c){var d=google.a.c.Ec,e=a[c++];if(e){var f=e,D=google.a.c.pd[e];D?(f=D,e===S&&(d=window.document),e=google.a.c.i.third_party):google.a.c.Eb[e]?(f=google.a.c.Eb[e],e=google.a.c.i.third_party_gen):e=google.a.c.Z?h:T?m:l;f=e.replace($a,g).replace(bb,n).replace("{language}",T).replace("{package}",f);google.a.c.zb(f,d);nb(c)}};nb(0)}};
	google.a.c.W=function(a){function c(){g=!0;for(var a=e.length,c=0;c<a;c++)e[c]()}function d(){h=!0;for(var a=f.length,c=0;c<a;c++)f[c]()}var e=[],f=[],g=!1,h=!1;google.a.c.W.count||(google.a.c.W.count=0);var l="load-css-"+google.a.c.W.count++,m={done:function(a){e.push(a);g&&a();return m},Aa:function(a){f.push(a);h&&a();return m}},n=document.createElement("link");n.setAttribute("id",l);n.setAttribute("rel","stylesheet");n.setAttribute("type","text/css");"undefined"!==typeof n.addEventListener?(n.addEventListener("load",
	c,!1),n.addEventListener("error",d,!1)):"undefined"!==typeof n.attachEvent&&n.attachEvent("onload",function(){var a,e=document.styleSheets.length;try{for(;e--;)if(a=document.styleSheets[e],a.id===l){c();return}}catch(ya){}g||d()});document.getElementsByTagName("head")[0].appendChild(n);n.setAttribute("href",a);return m};google.a.c.Tc=function(a,c){google.a.c.log("loadCSSFile: "+a);google.a.c.W(a).done(c).Aa(function(){google.a.c.error("loading css failed: "+a)})};
	google.a.c.Uc=function(a,c){a=google.a.c.ra(a);var d=google.a.c.Jc(a);if(null===d||0===d.length)c();else{google.a.c.log("Loading css files: "+d.join(", "));var e=google.a.c.i.prefix,f=google.a.c.i.css;google.a.c.Z&&(f=google.a.c.i.css_debug||f);var g=google.a.c.I,h=function(a){var m=d[a],l;l=a<d.length-1?function(){h(a+1)}:c;google.a.c.R[m]?(google.a.c.log("Already loaded "+m),google.a.c.window.setTimeout(l,0)):(google.a.c.R[m]=!0,m=f.replace("{css_prefix}",google.a.c.i.css_prefix).replace($a,e).replace(bb,
	g).replace("{cssFile}",m),google.a.c.Tc(m,l))};h(0)}};google.a.c.Cb=function(a){for(var c=a.replace(/-/g,"_").toLowerCase();Z.h(c);)a=c,c=google.a.c.languages[c],c===a&&(c=!1);c||(a.match(/_[^_]+$/)?(a=a.replace(/_[^_]+$/,""),a=google.a.c.Cb(a)):a="en");return a};
	google.a.c.fd=function(a,c){c.log&&(google.a.c.log=c.log);c.error&&(google.a.c.error=c.error);var d=c.debug,e=c.language||"",e=google.a.c.Cb(e);a||(a=c.version||"unknown");if(google.a.c.I&&google.a.c.I!==a||google.a.c.Ma&&google.a.c.Ma!==e||google.a.c.Z!==d)google.a.c.R={};google.a.c.I=a;google.a.c.Ma=e;google.a.c.Z=d};google.a.c.ea=!0;google.a.c.S=!1;
	google.a.c.load=function(a,c,d){if(google.a.c.S)google.a.c.U(function(){google.a.c.load(a,c,d)});else{var e;e=a.match(/^(testing\/)?(.*)/);var f=e[1]||"";for(a=e[2];;){e=google.a.c.vd[a];if(null==e||"top"===e)break;a=e}google.a.c.i=d||google.a.c.Ta[a]||google.a.c.Ta.gstatic;a=f+a;google.a.c.S=!0;var g=function(){google.a.c.S=!1;google.a.c.Na()};if(null==e)f=function(){var e=Z.Ea("google.charts.versionSpecific.load"),f=Z.Ea("google.charts.versionSpecific.setOnLoadCallback");e(a,c,d);f(g)},google.a.c.ea?
	(google.a.c.ea=!1,google.a.c.zb(google.a.c.i.prefix+"/"+a+"/loader.js",window.document,f)):f();else{if(!google.a.c.ea)throw Error("google.charts.load() cannot be called more than once with version 44 or earlier.");google.a.c.ea=!1;google.a.c.fd(a,c);google.a.c.log("google.charts.load version "+a);window.google=window.google||{};google.visualization=google.visualization||{};google.visualization.ModulePath=google.a.c.i.prefix;google.visualization.CssPath=google.a.c.i.css_prefix.replace($a,google.a.c.i.prefix).replace(bb,
	google.a.c.I);google.a.c.window=window;google.a.c.Ec=document;var h=c.packages;h&&0!==h.length||(h=["default"]);google.a.c.U(c.callback);google.a.c.Uc(h,function(){google.a.c.Xc(h,g)})}}};google.a.c.kd=function(a){if(window.addEventListener)window.addEventListener("load",a,!1);else if(window.attachEvent)window.attachEvent("onload",a);else{var c=window.onload;window.onload=function(d){c&&c(d);a()}}};google.a.c.Jb=document&&document.readyState===K;google.a.c.kd(function(){google.a.c.Jb=!0;google.a.c.Na()});
	google.a.c.Na=function(){!google.a.c.S&&google.a.c.Jb&&google.a.c.xc()};google.a.c.Ba=[];google.a.c.U=function(a){a&&google.a.c.Ba.push(a);google.a.c.S||google.a.c.Na()};google.a.c.xc=function(){var a=google.a.c.Ba;for(google.a.c.Ba=[];0<a.length;)a.shift()()};google.a.c.Qa=function(a,c){google.a.c.cd(a,c)};if(Z.Ea(Xa))throw Error("Google Charts loader.js can only be loaded once.");google.a.load=function(){var a=0;"visualization"===arguments[a]&&a++;var c="current";Z.h(arguments[a])&&(c=arguments[a],a++);var d={};arguments.length>a&&(d=arguments[a],a++);var e=void 0;arguments.length>a&&(e=arguments[a]);google.a.c.load(c,d,e)};google.a.U=function(a){google.a.c.U(a)};google.a.Qa=function(a,c){google.a.c.Qa(a,c)};Z.ya(Xa,google.a.load);Z.ya("google.charts.setOnLoadCallback",google.a.U);Z.ya("google.charts.packageLoadedCallback",google.a.Qa); })();

	/* jshint ignore:end */

/***/ }
/******/ ]);