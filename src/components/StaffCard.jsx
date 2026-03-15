function StaffCard({staff}){
return(
<div className="card">
<h3>{staff.name}</h3>
<p>Role: {staff.role}</p>
</div>
)
}

export default StaffCard