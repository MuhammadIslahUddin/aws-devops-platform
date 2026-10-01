output "ec2_public_ip" {
  description = "EC2 Server Public IP"
  value       = aws_instance.app_server.public_ip
}

output "ecr_repository_url" {
  description = "ECR Docker Image URL"
  value       = aws_ecr_repository.app_repo.repository_url
}

