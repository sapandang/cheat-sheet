---
title: "selenium xpath cheatsheet"
description: list of the usefull selenium xpath cheatsheet
---


## Find element with attribute
```html
<a ui-sref="order" href="#/order"> <span>Orders</span> </a>

//*[@ui-sref='order']
```


## Find element which contain the text in attribute
```html
<a ng-click="setJobMaster(job)" ui-sref="order.tab({jobMasterId: job.id,isAutoRouting:job.isSlotLatLngAllowed, title:job.title})" ui-sref-opts="{reload: 'order'}" class="ng-binding" href="#/order/3234/true/van">van</a>

//a[contains(@href,'van')]
```

## get element which has text
```html
<label class="controlLabel">Enable Scheduling</label>

//label[text()='Enable Scheduling']
```


## xpath get the sibling
```html
<div class="form-group"> <label class="controlLabel">Enable Scheduling<span class="text-danger star-mark">*</span></label> <div class="controlInput"> <div class="radio-inline pl0"> <input id="radio-50" class="radio-custom ng-pristine ng-untouched ng-not-empty ng-valid ng-valid-required" type="radio" value="true" ng-model="jobMasterDetails.isSchedulingAllowed" ng-value="true" name="allowScheduling" required=""> <label for="radio-50" class="radio-custom-label">Allowed</label> <input id="radio-51" class="radio-custom ng-pristine ng-untouched ng-not-empty ng-valid ng-valid-required" type="radio" ng-model="jobMasterDetails.isSchedulingAllowed" ng-value="false" name="allowScheduling" required="" value="false"> <label for="radio-51" class="radio-custom-label ml15">Not Allowed</label> </div> <div class="clearfix"></div> <!-- ngIf: jobMasterDetails.isSchedulingAllowed && !jobMasterDetails.autogenerateRunsheetNo --> </div> </div>

//label[text()='Enable Scheduling']/following-sibling::div
```


##  select radio button
```html
//label[text()='Enable Scheduling']/following-sibling::div/div/input[2]
```


## xpath check attribute and the inner text
```html
driver.findElement(By.xpath("//a[@ng-click='setJobMaster(job)' and text()='" + name + "']")).click();
//a[@ng-click='setJobMaster(job)' and text()='apireport']
```


## Xpath get parent from the child element
```html
<a class="dropdown-toggle" data-toggle="dropdown" href="javascript:;"> <span> <span class="glyphicon glyphicon-cog"></span> <span class="hidden-tablet"> Settings </span> <b class="caret"></b> </span> </a>


//span[text()=' Settings ']/parent::span/parent::a
```

## xpath select node located inside any node from the current node
```html
//div[@ng-show="Details.isCollectionAllowed"]//select/option[@value='?']

xpath node located at any point form current node : use //

//div[@class='col-sm-6 ng-scope']//input[@ng-model='user.login']
```


## xpath get elements where element contain the text
```html
contains(text(),'to search')

eg:
<strong class="ng-binding">&nbsp;12333_sap3 - fe</strong>
//strong[contains(text(),'_sap3')]


//xpath if multiple elements are found
//div[@class='tab-content']//table/tbody/tr[2]/td[3]
```

## xpath of button inside the form

```html
//*[@id="order_details_modal"]//button[text()=' Cancel ']
```

## xpath getting the last element from the list
```html
(//*[@name='userTypeform']//select)[last()]
```

## find element with multiple attribute
```
//div[(@role='combobox' ) and (@tabindex='0')]
```

## select list with the text
```
(//ul[(@role="listbox") and (@tabindex='0')])[1]//li[text()='Atlanta']
```

## select parent from child node
```
//button/span[text()='Initiate Routing']/..
```
