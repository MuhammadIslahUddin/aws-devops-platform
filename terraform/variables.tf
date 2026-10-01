variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  type    = string
  default = "aws-devops-platform"
}

variable "allowed_ssh_ip" {
  description = "Your public IP for SSH access"
  type        = string
}
