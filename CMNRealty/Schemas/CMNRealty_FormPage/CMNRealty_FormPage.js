define("CMNRealty_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
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
				"name": "Button_r1aroey",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_r1aroey_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"clicked": {},
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CalcAvgPriceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_ld76wvy_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "CMNCalculateAveragePriceProcess",
							"processRunType": "ForTheSelectedPage",
							"showNotification": true,
							"recordIdProcessParameterName": "RealtyIdParameter"
						}
					}
				},
				"parentName": "Button_r1aroey",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GetMaxPriceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_a8sv3dk_caption)#",
					"visible": true,
					"clicked": {
						"request": "CMN.RunGetMaxPriceWebServiceRequest"
					},
					"icon": "bars-button-icon"
				},
				"parentName": "Button_r1aroey",
				"propertyName": "menuItems",
				"index": 1
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
				"index": 1
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
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_0ny77l4",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_0ny77l4_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_gehsiqp",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_0ny77l4",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_9klt1kq",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_gehsiqp",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_5hwaun1",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_5hwaun1_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "CMNRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "CMNParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_9klt1kq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_t9086eu",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_t9086eu_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_woxj7hwDS"
						}
					}
				},
				"parentName": "FlexContainer_9klt1kq",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_23dpl97",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_23dpl97_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_9klt1kq",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_urcs2uz",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_urcs2uz_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "VisitsGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_23dpl97",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_gqalbxw",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_gqalbxw_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "CMNRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_23dpl97",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_iylv3yg",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_iylv3yg_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_iylv3yg_GridDetail_woxj7hw",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_woxj7hw"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_iylv3yg_SearchValue",
							"GridDetailSearchFilter_iylv3yg_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_9klt1kq",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_e6emqoj",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_0ny77l4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "VisitsGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_woxj7hw",
					"activeRow": "$GridDetail_woxj7hw_ActiveRow",
					"selectionState": "$GridDetail_woxj7hw_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_woxj7hw_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_woxj7hwDS_Id",
					"columns": [
						{
							"id": "5ad7e75e-62b7-82c6-c063-915363399ba8",
							"code": "GridDetail_woxj7hwDS_CMNVisitDateTime",
							"caption": "#ResourceString(GridDetail_woxj7hwDS_CMNVisitDateTime)#",
							"dataValueType": 7,
							"width": 192
						},
						{
							"id": "aa9ed99d-a04c-823a-b3f0-d32c3af20e80",
							"code": "GridDetail_woxj7hwDS_CMNPotentialCustomer",
							"caption": "#ResourceString(GridDetail_woxj7hwDS_CMNPotentialCustomer)#",
							"dataValueType": 10,
							"width": 151
						},
						{
							"id": "c3cb63bb-fac7-eced-51fd-66c02893d84d",
							"code": "GridDetail_woxj7hwDS_CMNComments",
							"caption": "#ResourceString(GridDetail_woxj7hwDS_CMNComments)#",
							"dataValueType": 28,
							"width": 130
						},
						{
							"id": "ec617e99-688d-2d11-4841-dc0e997951cf",
							"code": "GridDetail_woxj7hwDS_CMNParentRealty",
							"caption": "#ResourceString(GridDetail_woxj7hwDS_CMNParentRealty)#",
							"dataValueType": 10,
							"width": 143
						},
						{
							"id": "f98ad30c-0a84-c45d-0701-d13022d93cc4",
							"code": "GridDetail_woxj7hwDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_woxj7hwDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_e6emqoj",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_woxj7hw_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_woxj7hwDS",
							"filters": "$GridDetail_woxj7hw | crt.ToCollectionFilters : 'GridDetail_woxj7hw' : $GridDetail_woxj7hw_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_woxj7hw_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "VisitsGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_woxj7hw_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_woxj7hwDS",
							"filters": "$GridDetail_woxj7hw | crt.ToCollectionFilters : 'GridDetail_woxj7hw' : $GridDetail_woxj7hw_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_woxj7hw_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_woxj7hw_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_woxj7hw_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "VisitsGridDetail",
							"filters": "$GridDetail_woxj7hw | crt.ToCollectionFilters : 'GridDetail_woxj7hw' : $GridDetail_woxj7hw_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_woxj7hw_SelectionState"
						}
					}
				},
				"parentName": "VisitsGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_woxj7hw_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_woxj7hwDS",
							"filters": "$GridDetail_woxj7hw | crt.ToCollectionFilters : 'GridDetail_woxj7hw' : $GridDetail_woxj7hw_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_woxj7hw_SelectionState"
						}
					}
				},
				"parentName": "VisitsGridDetail",
				"propertyName": "bulkActions",
				"index": 2
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
					},
					"GridDetail_woxj7hw": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_woxj7hwDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_iylv3yg_GridDetail_woxj7hw",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "CreatedOn"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_woxj7hwDS_CMNVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_woxj7hwDS.CMNVisitDateTime"
									}
								},
								"GridDetail_woxj7hwDS_CMNPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_woxj7hwDS.CMNPotentialCustomer"
									}
								},
								"GridDetail_woxj7hwDS_CMNComments": {
									"modelConfig": {
										"path": "GridDetail_woxj7hwDS.CMNComments"
									}
								},
								"GridDetail_woxj7hwDS_CMNParentRealty": {
									"modelConfig": {
										"path": "GridDetail_woxj7hwDS.CMNParentRealty"
									}
								},
								"GridDetail_woxj7hwDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_woxj7hwDS.CreatedOn"
									}
								},
								"GridDetail_woxj7hwDS_Id": {
									"modelConfig": {
										"path": "GridDetail_woxj7hwDS.Id"
									}
								}
							}
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
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_woxj7hwDS": [
							{
								"attributePath": "CMNParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
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
					},
					"GridDetail_woxj7hwDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "CMNRealtyVisit",
							"attributes": {
								"CMNVisitDateTime": {
									"path": "CMNVisitDateTime"
								},
								"CMNPotentialCustomer": {
									"path": "CMNPotentialCustomer"
								},
								"CMNComments": {
									"path": "CMNComments"
								},
								"CMNParentRealty": {
									"path": "CMNParentRealty"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
          			{
				request: "CMN.PushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Button works!!!");
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
			},

          {
				request: "CMN.RunGetMaxPriceWebServiceRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Run web service button works...");

					// get id from type lookup type object
  					var typeObject = await request.$context.PDS_CMNType_vzu3h6e;
					var typeId = "";
					if (typeObject) {
						typeId = typeObject.value;
					}

					// get id from type lookup offer type object
					var offerTypeObject = await request.$context.PDS_CMNOfferType_i9ifp9w;
					var offerTypeId = "";
					if (offerTypeObject) {
						offerTypeId = offerTypeObject.value;
					}
                    /* Create an instance of the HTTP client from @creatio-devkit/common. */
					const httpClientService = new sdk.HttpClientService();

					/* Specify the URL to run web service method. */
					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
					const transferName = "rest";
					const serviceName = "RealtyService";
					const methodName = "GetMaxPriceByTypeId";
					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
					
					//const endpoint = "http://carlosm:7010/0/rest/RealtyService/GetMaxPriceByTypeId";
					/* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
					var params = {
						realtyTypeId: typeId,
						realtyOfferTypeId: offerTypeId
					};
                  	const response = await httpClientService.post(endpoint, params);
					
					console.log("response max price = " + response.body.GetMaxPriceByTypeIdResult);
					
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