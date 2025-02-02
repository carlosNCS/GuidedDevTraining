namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CMNRealtyEventsSchema

	/// <exclude/>
	public class CMNRealtyEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CMNRealtyEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CMNRealtyEventsSchema(CMNRealtyEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("123c89a9-25ce-4284-8f6b-3970cd7aa48a");
			Name = "CMNRealtyEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("f9b3d5b0-2aef-4fa0-a664-c3638f708779");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,77,107,219,64,16,189,7,242,31,6,209,131,4,102,73,174,77,27,168,141,91,2,105,90,98,181,151,210,195,122,53,86,182,236,135,216,89,57,117,75,255,123,103,181,114,237,200,41,100,16,104,119,246,205,155,247,134,113,210,34,117,82,33,212,24,130,36,191,137,98,225,221,70,183,125,144,81,123,119,126,246,251,252,12,56,122,210,174,133,213,142,34,218,171,227,212,113,161,181,222,253,247,49,160,88,186,168,163,70,122,9,70,44,183,232,226,30,250,109,72,239,134,220,173,102,17,14,67,185,82,15,104,229,29,123,128,183,80,44,62,222,221,163,52,113,87,84,223,115,81,215,175,141,86,160,140,36,130,252,246,12,13,188,134,185,36,124,230,37,179,140,3,56,34,244,91,150,172,27,132,173,215,13,124,114,43,185,101,35,165,95,255,64,21,129,208,53,24,102,144,9,231,184,97,87,3,237,187,208,18,96,117,160,59,98,78,177,102,21,226,31,219,158,6,171,171,167,176,204,11,97,240,195,198,203,156,168,114,193,4,220,160,210,86,26,232,130,86,105,74,185,74,124,192,88,239,58,108,22,222,244,214,125,149,166,199,55,35,244,186,76,147,252,156,240,197,180,181,222,64,153,153,174,225,242,98,31,213,83,208,196,85,10,20,55,180,144,78,161,193,134,69,196,208,35,51,159,226,40,134,180,17,188,147,36,91,172,209,118,70,198,36,219,225,35,220,122,37,141,254,37,215,6,87,3,174,28,205,124,33,12,188,180,142,135,207,27,43,238,145,124,31,20,131,124,96,150,217,105,155,20,135,117,201,123,86,204,160,56,233,64,98,24,205,13,213,222,207,117,155,111,69,37,106,63,42,168,94,96,131,229,231,132,120,239,131,149,177,156,216,227,198,151,226,98,254,234,100,218,41,226,67,240,143,131,253,229,79,133,93,50,184,175,159,194,255,28,174,227,145,127,252,253,5,180,79,78,138,228,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("7d053cea-bbc2-0044-1217-50e4ae29fbc6"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("f9b3d5b0-2aef-4fa0-a664-c3638f708779"),
				CreatedInSchemaUId = new Guid("123c89a9-25ce-4284-8f6b-3970cd7aa48a"),
				ModifiedInSchemaUId = new Guid("123c89a9-25ce-4284-8f6b-3970cd7aa48a")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("123c89a9-25ce-4284-8f6b-3970cd7aa48a"));
		}

		#endregion

	}

	#endregion

}

