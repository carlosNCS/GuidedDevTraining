namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CMNRealtyServiceSchema

	/// <exclude/>
	public class CMNRealtyServiceSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CMNRealtyServiceSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CMNRealtyServiceSchema(CMNRealtyServiceSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("018314d9-0ccf-4811-83e6-7e1b1bf1bd2b");
			Name = "CMNRealtyService";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("f9b3d5b0-2aef-4fa0-a664-c3638f708779");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,83,200,72,84,0,35,0,15,53,159,200,9,0,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("018314d9-0ccf-4811-83e6-7e1b1bf1bd2b"));
		}

		#endregion

	}

	#endregion

}

