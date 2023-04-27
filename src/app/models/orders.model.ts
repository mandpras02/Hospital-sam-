export interface OrdersAdmin {
    OrderId: string;
    OrderDate: string;
    CreatedBy: string;
    CreatedOn: string;
    ApprovedRejectedBy: string;
    ApprovedRejectedOn: string;
    Quantity: string;
    AllowedOrder: string;
    Status: string;
    HospitalId: string;
    DepartmentId: string;
    ProductId: string;
    UserId: string
}


//  public int OrderId { get; set; }
//  public DateTime? OrderDate { get; set; }
//  public string CreatedBy { get; set; }
//  public DateTime? CreatedOn { get; set; }
//  public string ApprovedRejectedBy { get; set; }
//  public DateTime? ApprovedRejectedOn { get; set; }
//  public string Quantity { get; set; }
//  public int? AllowedOrder { get; set; }
//  public string Status { get; set; }
//  public int? HospitalId { get; set; }
//  public int? DepartmentId { get; set; }
//  public int? ProductId { get; set; }
//  public int? UserId { get; set; }