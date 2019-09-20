# Platform.js <span>v1.3.5-11</span>

<!-- div class="toc-container" -->




<!-- div -->

## <a name="toc-platform"></a> platform

* <a href="#platform">`platform`</a>
* <a href="#platformdescription">`platform.description`</a>
* <a href="#platformlayout">`platform.layout`</a>
* <a href="#platformmanufacturer">`platform.manufacturer`</a>
* <a href="#platformname">`platform.name`</a>
* <a href="#platformos">`platform.os`</a>
* <a href="#platformparseuanavigatoruseragent">`platform.parse`</a>
* <a href="#platformprerelease">`platform.prerelease`</a>
* <a href="#platformproduct">`platform.product`</a>
* <a href="#platformtostring">`platform.toString`</a>
* <a href="#platformua">`platform.ua`</a>
* <a href="#platformversion">`platform.version`</a>

<!-- /div -->




<!-- div -->

## <a name="toc-platform-os"></a> platform.os

* <a href="#platformosarchitecture">`platform.os.architecture`</a>
* <a href="#platformosfamily">`platform.os.family`</a>
* <a href="#platformostostring">`platform.os.toString`</a>
* <a href="#platformosversion">`platform.os.version`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->




<!-- div -->

## platform




<!-- div -->

### <a name="platform"></a> `platform` [&#x24C8;](https://github.com/GerHobbelt/platform.js/blob/master/platform.js#L1090 "View in source") [&#x24C9;][1]

The platform object.

---

<!-- /div -->



<!-- div -->

### <a name="platformdescription"></a> `platform.description` [&#x24C8;](https://github.com/GerHobbelt/platform.js/blob/master/platform.js#L1098 "View in source") [&#x24C9;][1]

The platform description.

---

<!-- /div -->



<!-- div -->

### <a name="platformlayout"></a> `platform.layout` [&#x24C8;](https://github.com/GerHobbelt/platform.js/blob/master/platform.js#L1109 "View in source") [&#x24C9;][1]

The name of the browser's layout engine.
<br>
<br>
The list of common layout engines include:<br>
"Blink", "EdgeHTML", "Gecko", "Trident" and "WebKit"

---

<!-- /div -->



<!-- div -->

### <a name="platformmanufacturer"></a> `platform.manufacturer` [&#x24C8;](https://github.com/GerHobbelt/platform.js/blob/master/platform.js#L1122 "View in source") [&#x24C9;][1]

The name of the product's manufacturer.
<br>
<br>
The list of manufacturers include:<br>
"Apple", "Archos", "Amazon", "Asus", "Barnes & Noble", "BlackBerry",
"Google", "HP", "HTC", "LG", "Microsoft", "Motorola", "Nintendo",
"Nokia", "Samsung" and "Sony"

---

<!-- /div -->



<!-- div -->

### <a name="platformname"></a> `platform.name` [&#x24C8;](https://github.com/GerHobbelt/platform.js/blob/master/platform.js#L1138 "View in source") [&#x24C9;][1]

The name of the browser/environment.
<br>
<br>
The list of common browser names include:<br>
"Chrome", "Electron", "Firefox", "Firefox for iOS", "IE",
"Microsoft Edge", "PhantomJS", "Safari", "SeaMonkey", "Silk",
"Opera Mini" and "Opera"
<br>
<br>
Mobile versions of some browsers have "Mobile" appended to their name:<br>
eg. "Chrome Mobile", "Firefox Mobile", "IE Mobile" and "Opera Mobile"

---

<!-- /div -->



<!-- div -->

### <a name="platformos"></a> `platform.os` [&#x24C8;](https://github.com/GerHobbelt/platform.js/blob/master/platform.js#L1183 "View in source") [&#x24C9;][1]

The name of the operating system.

---

<!-- /div -->



<!-- div -->

### <a name="platformparseuanavigatoruseragent"></a> `platform.parse([ua=navigator.userAgent])` [&#x24C8;](https://github.com/GerHobbelt/platform.js/blob/master/platform.js#L253 "View in source") [&#x24C9;][1]

Creates a new platform object.




#### Arguments

1. `[ua=navigator.userAgent]` *(Object|string)*: The user agent string or context object.




#### Returns

*(Object)*: A platform object.

---

<!-- /div -->



<!-- div -->

### <a name="platformprerelease"></a> `platform.prerelease` [&#x24C8;](https://github.com/GerHobbelt/platform.js/blob/master/platform.js#L1146 "View in source") [&#x24C9;][1]

The alpha/beta release indicator.

---

<!-- /div -->



<!-- div -->

### <a name="platformproduct"></a> `platform.product` [&#x24C8;](https://github.com/GerHobbelt/platform.js/blob/master/platform.js#L1159 "View in source") [&#x24C9;][1]

The name of the product hosting the browser.
<br>
<br>
The list of common products include:
<br>
<br>
"BlackBerry", "Galaxy S4", "Lumia", "iPad", "iPod", "iPhone", "Kindle",
"Kindle Fire", "Nexus", "Nook", "PlayBook", "TouchPad" and "Transformer"

---

<!-- /div -->



<!-- div -->

### <a name="platformtostring"></a> `platform.toString()` [&#x24C8;](https://github.com/GerHobbelt/platform.js/blob/master/platform.js#L626 "View in source") [&#x24C9;][1]

Returns `platform.description` when the platform object is coerced to a string.




#### Returns

*(string)*: Returns `platform.description` if available, else an empty string.

---

<!-- /div -->



<!-- div -->

### <a name="platformua"></a> `platform.ua` [&#x24C8;](https://github.com/GerHobbelt/platform.js/blob/master/platform.js#L1167 "View in source") [&#x24C9;][1]

The browser's user agent string.

---

<!-- /div -->



<!-- div -->

### <a name="platformversion"></a> `platform.version` [&#x24C8;](https://github.com/GerHobbelt/platform.js/blob/master/platform.js#L1175 "View in source") [&#x24C9;][1]

The browser/environment version.

---

<!-- /div -->

<!-- /div -->




<!-- div -->

## platform.os




<!-- div -->

### <a name="platformosarchitecture"></a> `platform.os.architecture` [&#x24C8;](https://github.com/GerHobbelt/platform.js/blob/master/platform.js#L1191 "View in source") [&#x24C9;][1]

The CPU architecture the OS is built for.

---

<!-- /div -->



<!-- div -->

### <a name="platformosfamily"></a> `platform.os.family` [&#x24C8;](https://github.com/GerHobbelt/platform.js/blob/master/platform.js#L1204 "View in source") [&#x24C9;][1]

The family of the OS.
<br>
<br>
Common values include:<br>
"Windows", "Windows Server `2008` R2 / `7`", "Windows Server `2008` / Vista",
"Windows XP", "OS X", "Ubuntu", "Debian", "Fedora", "Red Hat", "SuSE",
"Android", "iOS" and "Windows Phone"

---

<!-- /div -->



<!-- div -->

### <a name="platformostostring"></a> `platform.os.toString()` [&#x24C8;](https://github.com/GerHobbelt/platform.js/blob/master/platform.js#L1220 "View in source") [&#x24C9;][1]

Returns the OS string.




#### Returns

*(string)*: The OS string.

---

<!-- /div -->



<!-- div -->

### <a name="platformosversion"></a> `platform.os.version` [&#x24C8;](https://github.com/GerHobbelt/platform.js/blob/master/platform.js#L1212 "View in source") [&#x24C9;][1]

The version of the OS.

---

<!-- /div -->

<!-- /div -->

<!-- /div -->




 [1]: #toc-platform "Jump back to the TOC."
