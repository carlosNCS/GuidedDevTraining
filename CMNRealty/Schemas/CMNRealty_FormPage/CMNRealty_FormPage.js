define("CMNRealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "CMNRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "79fb5258-f07a-4653-b15d-44dcf7a36681",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_no09bqw_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "CMN.PushButtonRequest"
					},
					"clickMode": "default",
					"icon": "database-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CMNName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.CMNName",
					"control": "$CMNName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_CMNPrice_b71h26b",
					"labelPosition": "auto",
					"control": "$PDS_CMNPrice_b71h26b"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_CMNArea_uga23rf",
					"labelPosition": "auto",
					"control": "$PDS_CMNArea_uga23rf"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Number",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_CMNNumber_mzxmwkh",
					"labelPosition": "auto",
					"control": "$PDS_CMNNumber_mzxmwkh",
					"multiline": false,
					"readonly": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Commission",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_CMNCommission_dke9acs",
					"labelPosition": "auto",
					"control": "$PDS_CMNCommission_dke9acs",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "RealtyType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_CMNType_vzu3h6e",
					"labelPosition": "auto",
					"control": "$PDS_CMNType_vzu3h6e",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_CMNOfferType_i9ifp9w",
					"labelPosition": "auto",
					"control": "$PDS_CMNOfferType_i9ifp9w",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Comments",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_CMNComments_d2ant2o",
					"labelPosition": "auto",
					"control": "$PDS_CMNComments_d2ant2o",
					"multiline": false,
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_CMNManager_rdqcr0x",
					"labelPosition": "auto",
					"control": "$PDS_CMNManager_rdqcr0x",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_CMNCountry_5p1vltn",
					"labelPosition": "auto",
					"control": "$PDS_CMNCountry_5p1vltn",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_CMNCity_vnkcoou",
					"labelPosition": "auto",
					"control": "$PDS_CMNCity_vnkcoou",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Percent",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_CMNOfferTypeCMNCommissionPercent",
					"control": "$PDS_CMNOfferTypeCMNCommissionPercent",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"CMNName": {
						"modelConfig": {
							"path": "PDS.CMNName"
						}
					},
					"PDS_CMNPrice_b71h26b": {
						"modelConfig": {
							"path": "PDS.CMNPrice"
						},
                      "validators": {
							"MySuperValidator": {
								"type": "CMN.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}

					},
					"PDS_CMNArea_uga23rf": {
						"modelConfig": {
							"path": "PDS.CMNArea"
						},
                      "validators": {
							"MySuperValidator": {
								"type": "CMN.DGValidator",
								"params": {
									"minValue": 100,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}

					},
					"PDS_CMNNumber_mzxmwkh": {
						"modelConfig": {
							"path": "PDS.CMNNumber"
						}
					},
					"PDS_CMNType_vzu3h6e": {
						"modelConfig": {
							"path": "PDS.CMNType"
						}
					},
					"PDS_CMNOfferType_i9ifp9w": {
						"modelConfig": {
							"path": "PDS.CMNOfferType"
						}
					},
					"PDS_CMNComments_d2ant2o": {
						"modelConfig": {
							"path": "PDS.CMNComments"
						}
					},
					"PDS_CMNManager_rdqcr0x": {
						"modelConfig": {
							"path": "PDS.CMNManager"
						}
					},
					"PDS_CMNCountry_5p1vltn": {
						"modelConfig": {
							"path": "PDS.CMNCountry"
						}
					},
					"PDS_CMNCity_vnkcoou": {
						"modelConfig": {
							"path": "PDS.CMNCity"
						}
					},
					"PDS_CMNCommission_dke9acs": {
						"modelConfig": {
							"path": "PDS.CMNCommission"
						}
					},
					"PDS_CMNOfferTypeCMNCommissionPercent": {
						"modelConfig": {
  							"path": "PDS.CMNOfferTypeCMNCommissionPercent"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS"
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "CMNRealty",
							"attributes": {
								"CMNOfferTypeCMNCommissionPercent": {
									"path": "CMNOfferType.CMNCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
          			{
				request: "CMN.PushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.PDS_CMNPrice_b71h26b;
					console.log("Price = " + price);
					request.$context.PDS_CMNArea_uga23rf = price * 0.2;
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},

          {
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
      					if (request.attributeName === 'PDS_CMNPrice_b71h26b' || 				             // if price changed
					   request.attributeName === 'PDS_CMNOfferTypeCMNCommissionPercent' ) { 		// or percent changed
						var price = await request.$context.PDS_CMNPrice_b71h26b;
						var percent = await request.$context.PDS_CMNOfferTypeCMNCommissionPercent;
						var commission = price * percent / 100;
						request.$context.PDS_CMNCommission_dke9acs = commission;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}

        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
          
          /* The validator type must contain a vendor prefix.
			Format the validator type in PascalCase. */
			"CMN.DGValidator": {
  				validator: function (config) {
  					return function (control) {
  						let value = control.value;
  						let minValue = config.minValue;
  						let valueIsCorrect = value >= minValue;
  						var result;
  						if (valueIsCorrect) {
  							result = null;
  						} else {
  							result = {
  								"CMN.DGValidator": { 
  									message: config.message
  								}
  							};
  						}
  						return result;
  					};
  				},
  				params: [
  					{
  						name: "minValue"
  					},
  					{
  						name: "message"
  					}
  				],
  				async: false
  			}

        }/**SCHEMA_VALIDATORS*/
	};
});