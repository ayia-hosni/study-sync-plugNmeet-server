
$token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoicGx1Z25tZWV0IiwiaXNzIjoicGx1Z25tZWV0Iiwic3ViIjoidXNlcjEyMyIsInVzZXJfaWQiOiJ1c2VyMTIzIiwibmFtZSI6IkVsLU1vaGFuZGVzIiwicm9vbV9pZCI6InRlc3Qtcm9vbSIsInJvbGUiOiJtb2RlcmF0b3IiLCJleHAiOjE3NjAwMzgxMjcsImlhdCI6MTc2MDAzNDUyN30.guGcCm_uqMEPW0pVa4RVGUOk5FHsdPPI0v0emUG06p4'
$body = '{"room_id":"test-room","name":"Test Room","max_participants":10,"recording":false}'
$headers = @{Authorization = "Bearer $token"; "Content-Type" = "application/json"}
Invoke-RestMethod -Uri "http://localhost:8085/api/v1/create-room" -Method POST -Headers $headers -Body $body
